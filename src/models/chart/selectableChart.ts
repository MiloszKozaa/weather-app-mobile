export interface ISelectableChart {
  type: string;
  unit: string;
  icon: number;
  color: string;
  chartSize?: {min: number; max: number};
}
