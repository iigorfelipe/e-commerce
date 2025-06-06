import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

type PaginationControlledProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const PaginationControlled = ({
  page,
  totalPages,
  onPageChange,
}: PaginationControlledProps) => {
  const pageItems = useMemo((): (number | "...")[] => {
    if (totalPages <= 7) return range(1, totalPages);

    if (page <= 4) {
      return [...range(1, 5), "...", totalPages];
    }

    if (page >= totalPages - 3) {
      return [1, "...", ...range(totalPages - 4, totalPages)];
    }

    return [1, "...", ...range(page - 1, page + 1), "...", totalPages];
  }, [page, totalPages]);

  return (
    <Pagination className="justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className={
              page === 1
                ? "text-theme-gray-brand pointer-events-none opacity-50"
                : "text-theme-gray-dark"
            }
          />
        </PaginationItem>

        {pageItems.map((item, index) => (
          <PaginationItem key={index}>
            {item === "..." ? (
              <PaginationEllipsis className="text-theme-gray-brand items-end pb-[0.3125rem]" />
            ) : (
              <PaginationLink
                isActive={item === page}
                onClick={() => onPageChange(item)}
                className={`size-[1.75rem] rounded-full ${item === page ? "text-theme-black border-0 drop-shadow-black" : "text-theme-gray-brand"}`}
                style={{
                  fontFamily: "Roboto, sans-serif",
                  ...(item === page && {
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 0px 4px 0px #707372",
                  }),
                }}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            className={
              page === totalPages
                ? "text-theme-gray-brand pointer-events-none opacity-50"
                : "text-theme-gray-dark"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
