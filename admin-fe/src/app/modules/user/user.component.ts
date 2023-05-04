import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userData = new MatTableDataSource<User>();
  user!: User[];
  userColumns: string[] = ['id' , 'name' , 'email' , 'address','phone','action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private userService: UserService,
              private router: Router){}

  ngOnInit(): void{ 
    this.getUsers();
  }
  
  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      this.userData.data =data;
    });
  }

  updateUser(id: BigInt){
    this.router.navigate(['user/update-user',id]);
  }

  deleteUser(id: BigInt){
    if(confirm("Are you sure to delete this User Data ?")) {
      this.userService.deleteUser(id).subscribe(data =>
        {
          this.getUsers();
        })
    }
    
  }

  
  ngAfterViewInit(){
    this.userData.sort = this.sort;
    this.userData.paginator = this.paginator;
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filter = filterValue.trim().toLowerCase();
  }
}
