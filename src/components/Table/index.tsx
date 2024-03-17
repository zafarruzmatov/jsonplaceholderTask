import type { TableProps } from "./types";

export const Table = <T,>({ data, columns }: TableProps<T>) => {
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
        <div className="overflow-x-auto rounded-md border">
            <table className="table w-full">
                <thead className="bg-slate-100 text-black">
                    <tr>{headers}</tr>
                </thead>

                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};
