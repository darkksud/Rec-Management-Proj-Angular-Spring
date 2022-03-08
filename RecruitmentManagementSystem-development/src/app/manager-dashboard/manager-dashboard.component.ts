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
  displayedColumns = ['projectName','automationTesting','manualTesting', 'php', 'sac'];

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
  
  projectName: string;
  automationTesting: number;
  manualTesting: number;
  php: number;
  sac:number;
}