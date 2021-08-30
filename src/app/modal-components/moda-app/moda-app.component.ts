import { Component, Input, OnInit } from '@angular/core';
import { AppsService } from "../../services/apps.service"

@Component({
  selector: 'app-moda-app',
  templateUrl: './moda-app.component.html',
  styleUrls: ['./moda-app.component.scss'],
})
export class ModaAppComponent implements OnInit {

  @Input() app:any;
  constructor(public appsService:AppsService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log("ó o id",this.app.id)
  }

  deleteApp(){
  this.appsService.deleteApp(this.app.id)
  }

}
