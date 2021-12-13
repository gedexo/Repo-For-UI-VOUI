import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

      url ='http://192.168.1.58:8000/api/categories/';

      data:any;
  getData(){

    return this.http.get(this.url);
}

}
