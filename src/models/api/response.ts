export interface IResponse<IData> {
  status: number;
  data: IData | {};
  error: string;
}
