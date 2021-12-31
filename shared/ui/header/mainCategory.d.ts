export interface mainCategory {
    'id':string,
    'url': string;
    'name': string;
    'subcategories': subCategory;
}
export interface subCategory {
    id:string,
    url: string;
    category:string;
    name: string;
    image: string,
    subcategories: subCategory;

}

