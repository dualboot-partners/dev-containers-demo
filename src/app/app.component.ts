import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'container';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => console.log(res))
    
  }
}
