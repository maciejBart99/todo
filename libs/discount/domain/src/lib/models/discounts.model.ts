import { SeasonModel } from './season.model';

export interface DiscountsModel {
  brand: string;
  seasons: SeasonModel[];
}
