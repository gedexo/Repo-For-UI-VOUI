import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewProductService {

  constructor(private http: HttpClient) { }

  subsubCategoryurl = "https://voui.geany.website/api/newarrivals/";

  getDataofSubSubCategory(id: number) {
    return this.http.get<any>(this.subsubCategoryurl + id + '/');
  }
}
