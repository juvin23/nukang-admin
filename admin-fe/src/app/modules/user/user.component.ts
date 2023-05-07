import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userData = new MatTableDataSource<User>();
  user!: User[];
  userColumns: string[] = ['id','name','email','birthdate','address','province','city','phone','status','created_by','created_on','edited_by','edited_on','last_login','action'];	

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService){}

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

  // deleteUser(id: BigInt){
  //   if(confirm("Apakah Anda yakin ingin menghapus data pengguna ini?")) {
  //     this.userService.deleteUser(id).subscribe(data =>
  //       {
  //         this.getUsers();
  //         this.toastr.success('Data pengguna berhasil dihapus', 'Hapus');
  //       })
  //   } 
  // }

  updateUserStatus(id: BigInt, status: string){
    if(confirm("Apakah Anda yakin ingin mengubah status pengguna ini?")) {
      this.userService.updateUserStatus(id, status).subscribe(data =>
        {
          this.getUsers();
          this.toastr.success('Status pengguna berhasil diubah', 'Ubah');
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
