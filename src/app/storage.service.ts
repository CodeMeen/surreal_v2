import { Injectable } from '@angular/core';
import { SqliteService } from './sqlite.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _sqlite: SqliteService) { }

  async initdb(){

  }
}
