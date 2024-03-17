import { ReactNode } from "react";

export interface IColumnProps<T> {
    key: keyof T;
    title: string | ReactNode;
    render?: (column: IColumnProps<T>, item: T) => ReactNode;
}

export interface TableProps<T> {
    columns: Array<IColumnProps<T>>;
    data?: T[];
    loading?: boolean;
}
