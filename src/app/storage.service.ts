import { Injectable } from '@angular/core';

import { SqliteService } from './sqlite.service';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

import { Platform } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { Thumbs } from 'swiper';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  initialized:any=false
  db:any


  constructor(private _sqlite: SqliteService,private platform: Platform) { 
  }

  /*

  async init() {
    let res=new Promise(async (resolve,reject)=>{
      if(this.initialized==false){

        await this.storage.defineDriver(CordovaSQLiteDriver)
   
        await this.storage.create().then((storage)=>{
         this._storage = storage;
         this.initialized=true
         
         resolve(this.initialized)
        },
        (error)=>{
         this.initialized=false
         console.log("Storage Init Error",error)
         reject(this.initialized)
        })
        
       }else{
         this.initialized=true
         resolve(this.initialized)
       }
    })
 
  return res
  }

   public async set(data) {
    await this.init().then(async ()=>{
      await this._storage.set(data.key, data.value);
    },
    (error)=>{
     console.log('Could Not Init Storage',error)
    })
 
  }

  public async get(data){
    let fetcheddata;

    await this.init().then(async ()=>{
      let resp=await this._storage?.get(data.key);
      
      if(!resp){
       let newresp={
         value: null
       }
       fetcheddata=newresp
      }else{
       let newresp={
         value: resp
       }
       fetcheddata=newresp
      }
    },
    (error)=>{
      let newresp={
        value: null
      }
      fetcheddata=newresp
     console.log('Could Not Init Storage',error)
    })

return fetcheddata

  }

  public async length(){
   let resp= await this._storage.length()
   console.log(resp)
   return resp
  }

  */

   async initializeStorage() {

     if(this.initialized==true){
      return new Promise((resolve,reject)=>{
       resolve(true)
      })

     }else{

       let res=new Promise((resolve,reject)=>{
         let appPlatform=Capacitor.getPlatform();
       
         if(appPlatform !== 'web'){
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
         }else{
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

         if(appPlatform==='web'){
           await Preferences.set(data);
         }else{

          // let dbisopen:any=await this.db.isDBOpen()

          
                
          // open db surrealwallet


          /*
      
          if(dbisopen.result == false || !dbisopen.result){
            await this.db.open();
          }

          */
        
    
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
      
    
    
         /*  await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
             console.log('Connection closed on SET: ')
           }); */

             // close db surrealwallet

             /*
             if(dbisopen.result == true){
              await this.db.close();
            }
           */
    
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
       if(appPlatform==='web'){
         let res= await Preferences.get(data);
         resp=res
       }else{

        //let dbisopen:any=await this.db.isDBOpen()
                
        // open db surrealwallet

      

    /*
        if(dbisopen.result == false || !dbisopen.result){
          await this.db.open();
        }

        */
      
  
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
  
  
        /*  await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
           console.log('Connection closed on GET')
         }) */

           // close db surrealwallet

           /*
           if(dbisopen.result == true){
            await this.db.close();
          }
          */
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
