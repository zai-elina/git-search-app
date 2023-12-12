import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useMediaQuery } from "react-responsive";

interface IPaginationProps {
  countResult: number;
  pageNumber: number;
  setPageNumber: (page: number) => void;
  setSkip: (isSkip: boolean) => void;
}

const Pagination: FC<IPaginationProps> = ({
  countResult,
  pageNumber,
  setPageNumber,
  setSkip,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 420px)",
  });
  const countOfUserInPage = 30;

  const onChange = (page: number) => {
    setPageNumber(page);
    setSkip(false);
  };

  return (
    <PaginationControl
      page={pageNumber}
      between={isMobile ? 1 : 3}
      total={countResult}
      limit={countOfUserInPage}
      changePage={onChange}
      ellipsis={1}
    />
  );
};

export default Pagination;
