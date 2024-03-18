import { useEffect, useMemo, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

interface CustomPaginationProps<T> {
    data: T[];
    itemsPerPage?: number;
}

export const CustomPagination = <T,>({
    data,
    itemsPerPage = 10,
}: CustomPaginationProps<T>) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage);
        searchParams.set("page", selectedPage.toString());
        setSearchParams(searchParams);
    };

    const paginationData = useMemo(() => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }, [totalPages, currentPage]);

    useEffect(() => {
        const totalPages = Math.ceil(data.length / itemsPerPage);

        setTotalPages(totalPages);
    }, [data, itemsPerPage]);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem
                    aria-disabled={currentPage <= 1}
                    className={clsx(
                        currentPage <= 1 && "pointer-events-none opacity-50",
                    )}
                >
                    <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {paginationData.map((pageNum) => (
                    <PaginationItem>
                        <PaginationLink
                            key={pageNum}
                            isActive={currentPage === pageNum}
                            onClick={() => handlePageChange(pageNum)}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem
                    aria-disabled={currentPage <= totalPages}
                    className={clsx(
                        currentPage <= totalPages &&
                            "pointer-events-none opacity-50",
                    )}
                >
                    <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
