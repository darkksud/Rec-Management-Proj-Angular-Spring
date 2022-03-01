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

/** Builds and returns a new User. */
// function createNewUser(sNo: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     sNo: sNo.toString(),
//     name: name,
//     phone: Math.round(Math.random() * 10000000000).toString(),
//     email: EMAILS[Math.round(Math.random() * (EMAILS.length - 1))],
//     skills: SKILLS[Math.round(Math.random() * (SKILLS.length - 1))],
//     project: PROJECTS[Math.round(Math.random() * (PROJECTS.length - 1))],
//     profile: PROFILES[Math.round(Math.random() * (PROFILES.length - 1))],
//     availabilityDate: AVAILABILITY_DATES[Math.round(Math.random() * (AVAILABILITY_DATES.length - 1))],
//     noticePeriod: NOTICE_PERIOD[Math.round(Math.random() * (NOTICE_PERIOD.length - 1))],
//     interviewDate: INTERVIEW_DATES[Math.round(Math.random() * (INTERVIEW_DATES.length - 1))],
//     panel: PANEL[Math.round(Math.random() * (PANEL.length - 1))],
//     feedback: FEEDBACK[Math.round(Math.random() * (FEEDBACK.length - 1))],
//     offerRLDate: OFFER_RL_DATE[Math.round(Math.random() * (OFFER_RL_DATE.length - 1))],
//     joiningDate: JOINING_DATE[Math.round(Math.random() * (JOINING_DATE.length - 1))],
//     resignationDate: RESIGNATION_DATE[Math.round(Math.random() * (RESIGNATION_DATE.length - 1))],
//     status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
//   };
// }

// /** Constants used to fill up our data base. */
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
// const SKILLS = ['Java'];
// const PROJECTS = ['SORIS'];
// const EMAILS = ['example@example.com'];
// const PROFILES = ['YES', 'NO'];
// const AVAILABILITY_DATES = ['13/02/2022'];
// const NOTICE_PERIOD = ['30'];
// const INTERVIEW_DATES = ['13/02/2022'];
// const PANEL = ['XYZ'];
// const FEEDBACK = [''];
// const OFFER_RL_DATE = ['13/02/2022'];
// const JOINING_DATE = ['13/02/2022'];
// const RESIGNATION_DATE = ['13/02/2022'];
// const STATUS = ['Candidate Selected'];
// console.log(fetch('http://localhost:8081/api/getTableData/'));

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
