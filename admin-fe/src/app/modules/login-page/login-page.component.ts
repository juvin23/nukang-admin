import { Component ,OnInit} from '@angular/core';
import { Admin } from './admin';
import { LoginPageService } from './login-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  hide = true;
  admin:Admin = new Admin();

  constructor(private loginPageService: LoginPageService,private router: Router){}

  adminLogin(){
    console.log(this.admin);
    this.loginPageService.loginAdmin(this.admin).subscribe(data=>
      {
        alert("login success !!!")
        this.goToDashboard();
      },error=>alert("Sorry enter correct user / password"));
  }

  goToDashboard(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
