import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import recData from './recData.json';  
import {HttpClient} from '@angular/common/http';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-recruitment-dashboard',
  templateUrl: './recruitment-dashboard.component.html',
  styleUrls: ['./recruitment-dashboard.component.css']
})
export class RecruitmentDashboardComponent{
  displayedColumns = ['sNo', 'name', 'phone', 'email', 'skills', 'project', 'profile', 
'availabilityDate', 'noticePeriod', 'interviewDate', 'panel', 'feedback', 'offerRLDate',
'joiningDate', 'resignationDate', 'status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor() {
  //   // Create 100 users
  //   const users: UserData[] = recData;
  //   //for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

  //   // Assign the data to the data source for the table to render
  //   this.dataSource = new MatTableDataSource(users);
  // }
  constructor(private http : HttpClient){
    
  }
  li:any;
  lis=[];
  path = environment.backGroundUrl + "api/recruitmentDashBoard/getAll";
  ngOnInit(): void {
    
    this.http.get(this.path)
    .subscribe(Response => {
      
     
      this.li=Response;
      const users: UserData[] = this.li;
    this.dataSource = new MatTableDataSource(users);
    this.ngAfterViewInit();
    this.applyFilter("");
    });
    
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


export interface UserData {
  sNo: string;
  name: string;
  phone: string;
  email: string;
  skills: string;
  project: string;
  profile: string;
  availabilityDate: string;
  noticePeriod: string;
  interviewDate: string;
  panel: string;
  feedback: string;
  offerRLDate: string;
  joiningDate: string;
  resignationDate: string;
  status: string;
}
