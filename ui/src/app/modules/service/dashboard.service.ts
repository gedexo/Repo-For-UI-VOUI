import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

      url ='https://voui.geany.website/api/categories/1/';

      data:any;
  getData():any{

    return this.http.get(this.url);
}

}
