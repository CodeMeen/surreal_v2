import { Injectable } from '@angular/core';
import { SqliteService } from './sqlite.service';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _sqlite: SqliteService) { }

  async set(data){

    let appPlatform=Capacitor.getPlatform();

    if(appPlatform==='web'){
      await Preferences.set(data);
    }else{

    //   let db = await this._sqlite.createConnection(
    //     'surrealwalletxx',
    //     false,
    //     'no-encryption',
    //     1,
    //   );
  
    
    //   await db.open();

    //    let ret = await db.query(`SELECT value FROM database WHERE key='`+data.key+`';`);

    //    console.log('Search For Value Ret: '+ret)

    //    if ( ret.values.length <= 0 ){
    //     let rex = await db.execute(`INSERT INTO database(key,value)VALUES('`+data.key+`','`+data.value+`');`)

    //     if (rex.changes.changes < 0) {
    //       console.log('Error Ret: '+rex)
    //       console.log('ERROR UPDATING DATABASE')
    //     }else{
    //       console.log('Data Insert Ret: '+rex)
    //     }

    //    }else{

    //     let rex = await db.execute(`UPDATE database SET value='`+data.value+`' WHERE key='`+data.key+`';`);

    //     if (rex.changes.changes < 0) {
    //       console.log('Error Ret: '+rex)
    //       console.log('ERROR UPDATING DATABASE')
    //     }else{
    //       console.log('Data Update Ret: '+rex)
    //     }

    //    }
  


    //   await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
    //     console.log('Connection closed on SET: ')
    //   });

     }
   
  }

  async get(data){
    let appPlatform=Capacitor.getPlatform();
    let resp;

    if(appPlatform==='web'){
      let res= await Preferences.get(data);
      resp=res
    }else{

      // let db = await this._sqlite.createConnection(
      //   'surrealwalletxx',
      //   false,
      //   'no-encryption',
      //   1,
      // );
  
      // // open db
      // await db.open();
       
      //   let ret = await db.query(`SELECT value FROM database WHERE key='`+data.key+`';`);

      //   console.log('Get Data Ret: '+ret)

      //   if ( ret.values.length <= 0 ){ 
      //     resp=null
      //   }else{
      //    resp=ret.values[0]
      //   }


      // await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
      //   console.log('Connection closed on GET')
      // })
      
    }
   
    return resp;
   
  }
}
