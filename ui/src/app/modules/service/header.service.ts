import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mainCategory, subCategory } from "app/../../shared/ui/header/mainCategory"
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  url ='https://voui.geany.website/api/categories/';

  data:any;
getCategory():any{
return this.http.get(this.url);
}
}
