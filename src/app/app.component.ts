import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from './service-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fetchData:any;
  title = 'CrudOperation';
  constructor(private service:ServiceApiService){}
  ngOnInit(){
    this.getDetails();
  }
  getDetails(){
    this.service.getApi().subscribe(res=>{
      console.log(res);
      this.fetchData=res;
    })
  }
}
