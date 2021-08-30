import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements DoCheck{

  pesquisa:string;

  constructor() {
    console.log("const",this.pesquisa)
  }
  ngDoCheck(){
  }

}
