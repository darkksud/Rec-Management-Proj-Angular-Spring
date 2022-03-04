//import { Component, OnInit } from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {
  displayedColumns = ['project_name','automation_testing','manual_testing', 'php', 'sac'];
  rowData=['total','score'];


  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   }

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 10; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

}
  function createNewUser(sNo: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '';
  
    return {
      sNo: sNo.toString(),
      name: name,
      phone:  Math.round(Math.random() * 100).toString(),
      email: EMAILS[Math.round(Math.random() * (EMAILS.length - 1))],
     
    
    };

}


/** Constants used to fill up our data base. */
const NAMES = ['1', '2', '', '3', '7', '3',
  '', '4', '', '', '', '',
  '', '', '', '4', '7', '2', '0'];
const SKILLS = [''];
const PROJECTS = [''];
const EMAILS = ['3'];


export interface UserData {
  sNo: string;
  name: string;
  phone: string;
  email: string;

}