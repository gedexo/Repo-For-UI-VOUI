import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

      url ='https://voui.geany.website/api/categories/1/';
      offerSalesUrl='https://voui.geany.website/api/offersale/';
       newArrivalsUrl='https://voui.geany.website/api/newarrivals/';

      data:any;
  getData():any{
    return this.http.get(this.url);
}
getOfferSales():any{
  return this.http.get(this.offerSalesUrl);
}
getNewArrivals():any{
  return this.http.get(this.newArrivalsUrl);
}

}
