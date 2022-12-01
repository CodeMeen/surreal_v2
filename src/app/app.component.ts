import { Component} from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { SqliteService } from './sqlite.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private initPlugin: boolean;
  constructor(
    private platform: Platform,
    private _sqlite: SqliteService,
  
  ) {


    this.platform.ready().then(async () => {
      this.platform.backButton.subscribeWithPriority(
        666666, () => {
          App.exitApp();
        });

      })



    this.initializeApp();
  
 
}

async initializeApp() {
let appPlatform=Capacitor.getPlatform();
   
if(appPlatform !== 'web'){
  console.log("Using SqlLite as Storage On "+appPlatform)
  this.platform.ready().then(async () => {
  
    this._sqlite.initializePlugin().then(async ret => {
      this.initPlugin = ret;
      console.log('>>>> in App  this.initPlugin ' + this.initPlugin);

      try{
        let result: any = await this._sqlite.echo('SQL WORKING');
        console.log(' from Echo ' + result.value);
      
        
        // initialize the connection
        let db = await this._sqlite.createConnection(
          'surrealwallet',
          false,
          'no-encryption',
          1,
        );
      
        // open db surrealwallet
        await db.open();
      
        const createTable: string = `
      CREATE TABLE IF NOT EXISTS database (
          id INTEGER PRIMARY KEY NOT NULL,
          key LONGTEXT,
          value LONGTEXT,
          last_modified INTEGER DEFAULT (strftime('%s', 'now'))
      );`
      
      let ret: any = await db.execute(createTable);
      console.log(ret)
      console.log('$$$ ret.changes.changes in db ' + ret.changes.changes);

      if (ret.changes.changes < 0) {
        return Promise.reject(new Error('Execute Table failed'));
      }

      await this._sqlite.closeConnection('surrealwallet');
      
      
      }catch(e){
      throw 'ERROR_INITIALING DATABASE: '+e
      }
    });
  });
}else{
  console.log("Using Capacitor Preferences as Storage On "+appPlatform)
}

 
}


}
