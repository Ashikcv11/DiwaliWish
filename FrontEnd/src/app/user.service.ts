import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_address: string = 'api';

  constructor(public http:HttpClient) { }

  addUser(user:any){
    console.log('service file got the item')
    // return this.http.post('http://localhost:3000/add',{'user':user})
    return this.http.post(`${this.server_address}/add`,{'user':user})

    // .subscribe((data)=>{
    //   console.log(data);
    //   console.log(user);
    // })
  }

  getuser(id:any){
    // return this.http.get('http://localhost:3000/getuser/'+id);
    return this.http.get(`${this.server_address}/getuser/`+id);


  }

  // getwish(id:any){
  //   return this.http.get('http://localhost:3000/wishes/'+id);

  // }
  mailsend(data:any){
    console.log('service file got the item')
    alert('mail sended successfully...')

    // return this.http.post('http://localhost:3000/mail',{'data':data})
    return this.http.post(`${this.server_address}/mail`,{'data':data})

  }
}
