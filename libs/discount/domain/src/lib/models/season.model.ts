import { SegmentModel } from './segment.model';

export interface SeasonModel {
  season: string;
  segments: SegmentModel[];
}
