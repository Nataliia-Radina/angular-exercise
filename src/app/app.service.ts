import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';

@Injectable()

export class AppService {

  private dataUrl = 'api/data.json'


  constructor(private http:HttpClient) {
  }

  getData() {
    return this.http.get(this.dataUrl)
        .pipe(
            catchError(this.handleError)
        );
  }


  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
