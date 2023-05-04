import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { transactions_history } from './transactions_history';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from './transaction.service';
import { Router } from '@angular/router';

export interface User {
  username: string;
  name: string;
  email: string;
  last_login:Date;
}


const ELEMENT_DATA: User[] = [
  {username: 'bfc092', name: 'Amber Thompson', email: 'euismod.urna.nullam@outlook.com', last_login:new Date(Date.now())},
  {username: 'be439c', name: 'Joan Abbot', email: 'test123@outlook.com', last_login:new Date(Date.now())},
  {username: 'eee1dc', name: 'Lilah Lilah', email: 'abcd@outlook.com', last_login:new Date(Date.now()) },
  {username: 'e1d0fb', name: 'Lynch', email: 'wqrqw@outlook.com', last_login:new Date(Date.now())},
  {username: '4c489c', name: 'Dalton', email: 'eaklqw@outlook.com', last_login:new Date(Date.now())},
  {username: '4c489c', name: 'Audrey', email: 'qkj@outlook.com', last_login:new Date(Date.now())},
  {username: '513123', name: 'Hodges', email: 'ahlmw@outlook.com', last_login:new Date(Date.now())},
  {username: '43129c', name: 'sapien', email: 'wrjipqw@outlook.com', last_login:new Date(Date.now())},
  {username: '4c489c', name: 'Clemons', email: 'wqtopqw@outlook.com', last_login:new Date(Date.now())},
  {username: '15kn12', name: 'Johns', email: 'arkwjrak@outlook.com', last_login:new Date(Date.now())},
  {username: '89412c', name: 'Reese', email: 'wqopjowpjt@outlook.com', last_login:new Date(Date.now())},
  {username: '14oko2', name: 'Arnold', email: 'apqkwoek@outlook.com', last_login:new Date(Date.now())},
  {username: '4c489c', name: 'Russo', email: 'hqejkqw@outlook.com', last_login:new Date(Date.now())},
  {username: '14oiom', name: 'neque', email: 'aqwqei@outlook.com', last_login:new Date(Date.now())},
  {username: '124j2k', name: 'Gibbs', email: 'qwpitop@outlook.com', last_login:new Date(Date.now())},
  {username: '9814n2', name: 'Yates', email: 'qwreqrklqk@outlook.com', last_login:new Date(Date.now())},
  {username: '12o4nn', name: 'Walton', email: 'qrwkoqwe@outlook.com', last_login:new Date(Date.now())},
  {username: '124op2', name: 'Aline', email: 'rqworowpq@outlook.com', last_login:new Date(Date.now())},
  {username: '1b25j2', name: 'Giacomo', email: 'qwrpqwrl@outlook.com', last_login:new Date(Date.now())},
  {username: '1245kl', name: 'Vielka', email: 'qrennm@outlook.com', last_login:new Date(Date.now())},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  public transactionData = new MatTableDataSource<transactions_history>();
  transactionCategory: transactions_history = new transactions_history;
  transactionCategoryColumn: string[] = ['id' , 'txn_id' , 'txn_start_date' ,'record_status' , 'last_update' , 'dennied_reason' ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private transactionService: TransactionService,
    private router: Router){
  }

  ngOnInit(): void{ 
    this.getTransaction();
  }

  getTransaction(){
    this.transactionService.getTransactionList().subscribe(data =>{
      this.transactionData.data = data;
      console.log(data)
      });
  }

  ngAfterViewInit(){
    this.transactionData.sort = this.sort;
    this.transactionData.paginator = this.paginator;
  }
}

