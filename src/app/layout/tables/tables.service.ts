import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class tableService {
  private url = environment.apiBaseUrl + 'AttEmp';



  constructor(private http: HttpClient) { }

 

  getTable (): Observable<any[]> {
    return this.http.get<any[]> ( this.url , environment.httpOptions )
      

            }
            
   


}

