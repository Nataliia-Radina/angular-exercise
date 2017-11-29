import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Lobster Team';

  results: string[];


  constructor(private http:HttpClient) {
    this.http.get('http://offlinejs.com/request.txt').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data);
    });
  }

}
