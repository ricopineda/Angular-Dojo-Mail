import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users = [

  	{email: 'bill@gates.com', importance: 'high', subject: 'windows', content:'windows xl'}, 
  	{email: 'ada@love.com', importance: 'high', subject: 'prograamming', content:' some numbers'},
  	{email: 'john@carmac.com', importance: 'low', subject: 'algo', content:'windows xl'},
  	{email: 'ada@love.com', importance: 'low', subject: 'hl3', content:'just kidding xl'}


  ]












  // email = [bill@gates.com, ada@lovelace.com, john@carmoc.com, gabe@newell.com];
  // importance = [high, high, low, low];
  // subject = [windows, programming algo, hl3];
  // content = [windows xl, enchantres of numbers, new alogs, just kidding]
}
