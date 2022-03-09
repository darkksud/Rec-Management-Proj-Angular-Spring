import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {
<<<<<<< HEAD
   displayedColumns = ['projectName','automationTesting','manualTesting', 'php', 'sac','ba','scrum','cicd','unix','kafka'];
=======
  displayedColumns = ['projectName','automationTesting','manualTesting', 'php', 'sac'];
>>>>>>> 1f2c3ce9c74d340a77d1dd0ed7e55e6732ca0da2

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
    
    });
    
  }
}






export interface UserData {
<<<<<<< HEAD

 

  projectName: string;

  automationTesting: number;

  manualTesting: number;

=======
  
  projectName: string;
  automationTesting: number;
  manualTesting: number;
>>>>>>> 1f2c3ce9c74d340a77d1dd0ed7e55e6732ca0da2
  php: number;

  sac:number;

  ba:number;

  scrum:number;

  cicd:number;

  unix:number;

  kafka:number;

}