import { TableProps } from 'antd';

export type TablePagination<T extends object> = NonNullable<
  Exclude<TableProps<T>['pagination'], boolean>
>;
export type TablePaginationPosition = NonNullable<TablePagination<any>['position']>[number];
