import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  private username:string="";
  private loggedIn:boolean = false;

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  login(username: string, password:string){
    var result:any = {};
    var loggedIn:boolean = false;
    console.log("==> Creating Promise: " + username);
    if(username === password){
      this.username = username;
      this.loggedIn = true;

      result.returnCode = 200;
      result.returnMessage = username + " is valid";
    } else {
      this.username = "";
      this.loggedIn = false;
    }

    loggedIn = this.loggedIn;

    return new Promise(function(resolve, reject){
      if(loggedIn){
        result.returnCode = 200;
        result.returnMessage = username + " is valid";
        resolve(result);
      } else {
        throw new Error("Username and/or Password are invalid.")
      }
    });
  }

  logout(){
    var loggedIn:boolean = this.loggedIn;
    var result:any = {};

    if(loggedIn){
      this.username = "";
      this.loggedIn = false;
    }

    return new Promise(function(resolve, reject){
      if(loggedIn){
        result.returnCode = 200;
        result.returnMessage = "User is logged out.";
        resolve(result);
      } else {
        throw new Error("User is not logged in.")
      }
      
    })
  }

  getUserName(){
    return this.username;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
