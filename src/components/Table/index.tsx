import { Icons } from "..";
import type { TableProps } from "./types";

export const Table = <T,>({ data, columns, loading }: TableProps<T>) => {
    const headers = columns.map((column, index) => {
        return (
            <th key={`headCell-${index}`} className="p-2 text-left">
                {column.title}
            </th>
        );
    });

    const rows = !data?.length ? (
        <tr>
            <td colSpan={columns.length} className="text-center">
                No data
            </td>
        </tr>
    ) : (
        data?.map((row, index) => {
            return (
                <tr key={`row-${index}`}>
                    {columns.map((column, index2) => {
                        const value =
                            column.render !== undefined
                                ? column.render(column, row as T)
                                : (row[column.key] as string);

                        return (
                            <td key={`cell-${index2}`} className="p-2">
                                {value}
                            </td>
                        );
                    })}
                </tr>
            );
        })
    );

    return (
        <div className="relative overflow-x-auto rounded-md border">
            {!!loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5">
                    <Icons.loadingSpinner />
                </div>
            )}
            <table className="table min-h-64 w-full">
                <thead className="bg-slate-100 text-black">
                    <tr>{headers}</tr>
                </thead>

                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};
