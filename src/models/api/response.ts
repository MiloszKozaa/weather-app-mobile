export type IResponse<IData> =
  | {status: 'success'; data: IData}
  | {status: 'error'; message: string};
