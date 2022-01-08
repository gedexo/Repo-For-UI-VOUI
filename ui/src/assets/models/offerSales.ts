import { options } from './options';
import { images } from './image';
export interface offerSale {
  id: number;
  brand:number;
  name:string;
  created_date:Date;
  offerPercentage:number;
  offerPrice:number;
  image:images;
  price:number;
  options:options;
}
