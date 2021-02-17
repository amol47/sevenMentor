import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  /**
   * getUsers
   */
  public getUsers():Observable<any> {
    return this.http.get(this.url);
  }

  /**
   * getuser
   */
  public getUser(userId:any):Observable<any> {
    console.log("user Id"+userId);
    
    return this.http.get(this.url+"/"+userId);
  }
  
}
