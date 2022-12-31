import { Injectable } from '@angular/core';

import { SqliteService } from './sqlite.service';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

import { Platform } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { Thumbs } from 'swiper';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  initialized:any=false
  db:any


  constructor(private _sqlite: SqliteService,private platform: Platform) { 
  }

   async initializeStorage() {

     if(this.initialized==true){
      return new Promise((resolve,reject)=>{
       resolve(true)
      })

     }else{

       let res=new Promise(async (resolve,reject)=>{
         let appPlatform=Capacitor.getPlatform();
          
         if(appPlatform=='android'){

          console.log("Using FileDb as Storage On "+appPlatform)

         await Filesystem.readFile({
            path: 'init.txt',
            directory: Directory.Data,
            encoding: Encoding.UTF8

          }).then(
            async (data:any)=>{

            if(data.data=='DATABASE_INITIALIZED'){
              this.initialized=true
              resolve(true)
            }else{

              await Filesystem.writeFile({
                path: 'init.txt',
                data: "DATABASE_INITIALIZED",
                directory: Directory.Data,
                encoding: Encoding.UTF8,
              }).then(()=>{
                this.initialized=true
                resolve(true)
              },
              (error)=>{
                this.initialized=false
                reject(false)
              })
    

            }

          },
          async (error)=>{
            await Filesystem.writeFile({
              path: 'init.txt',
              data: "DATABASE_INITIALIZED",
              directory: Directory.Data,
              encoding: Encoding.UTF8,
            }).then(()=>{
              this.initialized=true
              resolve(true)
            },

            (error)=>{
              this.initialized=false
              reject(false)
            })

          })

         }else if(appPlatform == 'ios'){
           console.log("Using SqlLite as Storage On "+appPlatform)
           this.platform.ready().then(async () => {
          
             await this._sqlite.initializePlugin().then(async (dat) => {
             

                  // initialize the connection
                this.initialized=dat
                    
                    await this._sqlite.createConnection(
                     'surrealwalletxx',
                     false,
                     'no-encryption',
                     1,
                   ).then(async (data)=>{
                     this.db=data
                   },
                   (error)=>{
                    this.initialized=false
                     reject(error)
                   })

                   let dbisopen:any=await this.db.isDBOpen()
                
                    // open db surrealwallet

                    if(dbisopen.result == false || !dbisopen.result){
                      await this.db.open();
                    }
                  
        
              
                 let result: any = await this._sqlite.echo('SQL WORKING');
                 console.log(' from Echo ' + result.value);
                
                 const createTable: string = `
               CREATE TABLE IF NOT EXISTS database (
                   id INTEGER PRIMARY KEY NOT NULL,
                   key LONGTEXT,
                   value LONGTEXT,
                   last_modified INTEGER DEFAULT (strftime('%s', 'now'))
               );`
              
               let ret: any = await this.db.execute(createTable);
            
               console.log('Changes in db ' + ret.changes.changes);

              
       
                
               
               
               // close db surrealwallet
               
               /*

                 if(dbisopen.result == true){
                  await this.db.close();
                }

                */
               
        
               


              /* await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
                 console.log('Connection Closed On App Init')
               }); */
        
               if (ret.changes.changes < 0) {
                this.initialized=false
                reject(false)
              }else{
                resolve(true)
              }
               
        
        
             },
             (error)=>{
              this.initialized=false
              reject(error)
             });
           });
         }else if(appPlatform=='web'){
           this.initialized=true
           console.log("Using Capacitor Preferences as Storage On "+appPlatform)
           resolve(true)
         }
       })

       return res
     }
     
     }
    

  async set(data){

     await this.initializeStorage().then(async (dar)=>{
   
         let appPlatform=Capacitor.getPlatform();
         if(appPlatform=='android'){
              let key=data.key
              let datavalue=data.value

              await Filesystem.writeFile({
                path: ''+key+'.txt',
                data: datavalue,
                directory: Directory.Data,
                encoding: Encoding.UTF8,
              });

              
         }else if(appPlatform==='web'){

           await Preferences.set(data);

         }else if(appPlatform==='ios'){ 
        
    
           let db = this.db
    
            let ret = await db.query(`SELECT value FROM database WHERE key='`+data.key+`';`);
            console.log('Return for execute',JSON.stringify(ret))
    
    
            if ( ret.values.length <= 0 ){
             let rex = await db.execute(`INSERT INTO database(key,value)VALUES('`+data.key+`','`+data.value+`');`)
    
             if (rex.changes.changes < 0) {
              
               console.log('ERROR UPDATING DATABASE')
             }else{
             
             }
    
            }else{
    
             let rex = await db.execute(`UPDATE database SET value='`+data.value+`' WHERE key='`+data.key+`';`);
    
             if (rex.changes.changes < 0) {
               console.log('ERROR UPDATING DATABASE')
             }else{
             
             }
    
            }
 
    
         }
  


     },
     (error)=>{
       console.log('An error occured While Initializing Storage',error);
     }
     )

   
   
   }

   async get(data){
    
     let resp:any

     await this.initializeStorage().then(async (dar)=>{

       let appPlatform=Capacitor.getPlatform();


       if(appPlatform=='android'){

       let rez:any;

        try {

          rez= await Filesystem.readFile({
            path: ''+data.key+'.txt',
            directory: Directory.Data,
            encoding: Encoding.UTF8
          })

        } catch (error) {
          rez=null
        }
        
        if(rez){

          resp={
            value:rez.data
          }
          
        }else{
          resp={
            value:rez
          }
        }
     

        
       }else if(appPlatform=='web'){
         let res= await Preferences.get(data);
         resp=res
       }else if(appPlatform=='ios'){

  
         let db = this.db
        
         
           let ret = await db.query(`SELECT value FROM database WHERE key='`+data.key+`';`);
           console.log('Return for execute',JSON.stringify(ret))
  
  
           if ( ret.values.length <= 0 ){ 
             resp={
               value:null
             }
           }else{
            resp=ret.values[0]
           }

       }
     },
     (error)=>{
       resp=null;
       console.log('An error occured While Initializing Storage',error);
     }
     )


     return resp;
   
   }


}
