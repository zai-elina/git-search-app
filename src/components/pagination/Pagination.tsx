import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

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
  const countOfUserInPage = 24;

  const onChange = (page: number) => {
    setPageNumber(page);
    setSkip(false);
  };

  return (
    <PaginationControl
      page={pageNumber}
      between={3}
      total={countResult > 1000 ? 1000 : countResult}
      limit={countOfUserInPage}
      changePage={onChange}
      ellipsis={1}
    />
  );
};

export default Pagination;
