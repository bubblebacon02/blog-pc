// ~ 这里I表示接口, 代表公共接口

// !分页
export interface IPageParams {
  page: number;
  pageSize: number;
}

// !响应
export interface IBaseType<T = any> {
  errorCode: number | string;
  msg: string;
  data: T;
}

// !响应列表
export interface IBaseListType<T = any> {
  errorCode: number | string;
  msg: string;
  data: {
    total: number;
    list: T[];
  };
}
