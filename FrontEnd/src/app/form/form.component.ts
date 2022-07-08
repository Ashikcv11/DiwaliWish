import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../home/userModel';
// import { Clipboard } from '@angular/cdk/Clipboard'
// import { Clipboard } from '.../'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id = " "
  cp:string = 'copy link'
  cp1:string = 'copy link'

  data:any = new UserModel("","","")

  constructor(public userService:UserService, private active:ActivatedRoute,
              public router:Router) { }

  ngOnInit(): void {
    // let userid = localStorage.getItem('userid')
    // let userid = this.userData.userid;
    this.id = this.active.snapshot.params['id']
    // console.log(userid)
    this.userService.getuser(this.id).subscribe((data)=>{
      this.data=JSON.parse(JSON.stringify(data));
      // console.log(data)
    })
    // console.log(userid);
  }

  preview(){
    this.id = this.active.snapshot.params['id']
    console.log(this.id)
      this.router.navigate(['/wish/',this.id])
    }

    previewall(){
      this.router.navigate(['wish-all']);
    }

    sendmail(){
      // alert('email conformation')
      this.userService.mailsend(this.data).subscribe((mail)=>{
        var respons = JSON.parse(JSON.stringify(mail))
        // console.log("happened")
        alert('mail sende successfully...')

      })

    }
    click(input:any){
      input.select();
      document.execCommand('copy');
      console.log(input);

    }

    click1(input:any){
      input.select();
      document.execCommand('copy');
      console.log(input);

    }

    change(){
      this.cp='link cpied'
    }

    change1(){
      this.cp1='link cpied'
    }


  }

