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

       await this.initializeApp();

      })



  
  
 
}

async initializeApp() {
let appPlatform=Capacitor.getPlatform();
   
if(appPlatform !== 'web'){
  console.log("Using SqlLite as Storage On "+appPlatform)
  this.platform.ready().then(async () => {
  
    this._sqlite.initializePlugin().then(async (dat) => {
      this.initPlugin = dat;
      console.log('Init Plugin' + this.initPlugin);

           // initialize the connection
           let db = await this._sqlite.createConnection(
            'surrealwalletxx',
            false,
            'no-encryption',
            1,
          );
        
          // open db surrealwallet
          await db.open();

      
        let result: any = await this._sqlite.echo('SQL WORKING');
        console.log(' from Echo ' + result.value);
        
        const createTable: string = `
      CREATE TABLE IF NOT EXISTS database (
          id INTEGER PRIMARY KEY NOT NULL,
          key LONGTEXT,
          value LONGTEXT,
          last_modified INTEGER DEFAULT (strftime('%s', 'now'))
      );`
      
      let ret: any = await db.execute(createTable);
      console.log(ret)
      console.log('Changes in db ' + ret.changes.changes);

      if (ret.changes.changes < 0) {
       console.log('Error Executing Table')
      }

      await this._sqlite.closeConnection('surrealwalletxx').then(()=>{
        console.log('Connection Closed On App Init')
      });
    });
  });
}else{
  console.log("Using Capacitor Preferences as Storage On "+appPlatform)
}

 
}


}
