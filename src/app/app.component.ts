import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
   a: number = 688;
   list: any[] = [
    {id: 1, name: "Thao1"},
    {id: 1, name: "Thao2"},
    {id: 1, name: "Thao3"}
  ]

  create(id: number, name: string): void {
     this.list.push({id: id, name: name})
  }
}
