import { Component, OnInit } from '@angular/core';
import { UserModel } from '../home/userModel';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  id = ''

 data = new UserModel('','','')
  constructor( private userService:UserService, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.params['id']
    // let userid = localStorage.getItem('userid')
    this.userService.getuser(this.id).subscribe((data)=>{
      this.data=JSON.parse(JSON.stringify(data));
    })

  }

}
