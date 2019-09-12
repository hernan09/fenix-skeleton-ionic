import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items:any
  constructor() {
    
     setTimeout(()=>this.items=[{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'}],3000)

  }
  doRefresh(event) {
    console.log('evento',event);
    this.items = null
    setTimeout(() => {
      console.log('Async operation has ended');
      this.items=[{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'},{'name':'hernan'}]
      
      event.target.complete();
    }, 2000);
  }
    
}
