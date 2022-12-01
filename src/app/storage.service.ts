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

      try {
        let db = await this._sqlite.createConnection(
          'surrealwallet',
          false,
          'no-encryption',
          1,
        );
    
        // open db testEncryption
        await db.open();
    
        let dbquery=''

        await this._sqlite.closeConnection('surrealwallet');

      } catch (error) {
        throw error
      }

    }
   
  }

  async get(property){
    let appPlatform=Capacitor.getPlatform();

    if(appPlatform==='web'){
      let data= await Preferences.get(property);
      return data
    }else{
      try {
        let db = await this._sqlite.createConnection(
          'surrealwallet',
          false,
          'no-encryption',
          1,
        );
    
        // open db testEncryption
        await db.open();
    
        let dbquery=''
  
        await this._sqlite.closeConnection('surrealwallet');
      } catch (error) {
        throw error
      }
      
    }
  
   
  }
}
