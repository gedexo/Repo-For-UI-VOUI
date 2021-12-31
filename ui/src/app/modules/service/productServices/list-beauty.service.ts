import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListBeautyService {
  constructor(private http: HttpClient) {}
  mainCategoryurl = 'https://voui.geany.website/api/categories/';

  subCategoryurl = 'https://voui.geany.website/api/subcategories/';

  subsubCategoryurl = 'https://voui.geany.website/api/subsubcategories/';

  getDataofSubCategory(id: number) {
    return this.http.get<any>(this.subCategoryurl + id + '/');
  }
  getDataofSubSubCategory(id: number) {
    return this.http.get<any>(this.subsubCategoryurl + id + '/');
  }
  getDataofMainCategory(id: number) {
    return this.http.get<any>(this.mainCategoryurl + id + '/');
  }
}
