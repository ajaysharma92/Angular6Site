import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, RequestInfoUtilities, ResponseOptions, ParsedRequestUrl, RequestCore } from 'angular-in-memory-web-api';
import { ConfigService } from '../app/config.service';
import { AuthenticationService } from '../app/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private auth : AuthenticationService) {}
  
  createDb(){
    let users = [
      { id: 11, firstName: 'vijay', lastName: 'kumar', email: 'vijay.kum@gmail.com', password: '12345' },
      { id: 12, firstName: 'raj', lastName: 'sha', email: 'rajsha0130@gmail.com', password: '12345' }
    ];
    return {users};
  }

  getToken(users){
    return 'This is a Token';
  }

  //overriding post
  post(reqInfo: RequestInfo){
    console.log(reqInfo);
    if (reqInfo.id === 'login') {
        reqInfo.id = null;
        return reqInfo.utils.createResponse$(() => {
          const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
          const users = reqInfo.collection.find(user => {
                  reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
                  
          });

          let responseBody = {};

          if(users){
            responseBody = {
              id: users.id,
              firstName: users.firstName,
              lastName: users.lastName,
              email: users.email,
              token: this.getToken(users)
            };
          }

          const options: ResponseOptions = responseBody ?
          {
            body: dataEncapsulation ? { responseBody } : responseBody,
            status: 200
          } :
          {
            body: { error: `'User' with emailID='${reqInfo.req['body'].email}' not found` },
            status: 404
          };

          options.statusText = options.status === 200? 'OK' : 'Not Found';
          options.headers = reqInfo.headers;
          options.url = reqInfo.url;
          return options;

        });
    } else if(reqInfo.id === 'signup') {
        reqInfo.id = null;
        console.log('From Signup');
    }

  }
}
