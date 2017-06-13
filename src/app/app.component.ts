import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  sum:number = 0;
   setValue(a, b) { this.sum = Number(a) + Number(b); }
}
