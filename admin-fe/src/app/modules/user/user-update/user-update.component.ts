import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'highcharts';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})

export class UserUpdateComponent implements OnInit{

  id!: BigInt;
  user :User = new User;
  constructor(private userService : UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{

    this.id= this.route.snapshot.params['id'];
    
    this.userService.getUserById(this.id).subscribe(data=>{
      console.log(data);
      this.user = data;
    },error => console.log(error));
  
  }

  onUpdate(){
    this.userService.updateUser(this.id , this.user).subscribe(data =>{
      this.goToUserList();
    }, error => console.log(error))
  }

  goToUserList(){
    this.router.navigate(['/user'])
  }

}