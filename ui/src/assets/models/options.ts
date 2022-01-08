import { sizes } from './sizes';
import { images } from './image';
export interface options {
  id: number;
  color:string;
  colorhash:string;
  image_one:images;
  image_two:images;
  image_three:images;
  stock:number;
  url:string;
  sizes:sizes;
}
