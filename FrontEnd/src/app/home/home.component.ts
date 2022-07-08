import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from './userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  // userid:number = Date.now();

  UserModel:any = new UserModel('','','');

  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  Sucess(){

    this.userService.addUser(this.UserModel).subscribe((data)=>{
      var id = JSON.parse(JSON.stringify(data))
      this.router.navigate(['/success/',id._id])
      console.log(id)

      // console.log("success1042")
    })

    // alert('from submitted successfully...')
    // localStorage.setItem("userid", this.userid.toString());

    // this.userid = this.userid+1;


  }


}
