import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // tslint:disable-next-line:variable-name
  private Rest_Api_Service = 'http://localhost:3000/products';

  constructor(private httClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getRequest(){
    return this.httClient.get(this.Rest_Api_Service);
  }
}
