//import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';

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


  constructor(private http : HttpClient){
    
  }
  li:any;
  lis=[];
  path = environment.backGroundUrl + "api/managerDashBoard/getAll";
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
  projectName: string;
  manualTesting: number;
  automationTesting: number;
  php: number;
  sac: number;

}
