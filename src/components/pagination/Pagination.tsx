import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

interface IPaginationProps {
  countResult: number;
}

const Pagination: FC<IPaginationProps> = ({
  countResult,
  //   onChange,
}) => {
  const [page, setPage] = useState(1);
  const countOfUserInPage = 12;

  return (
    <PaginationControl
      page={page}
      between={3}
      total={countResult}
      limit={countOfUserInPage}
      changePage={(page) => {
        setPage(page);
      }}
      ellipsis={1}
    />
  );
};

export default Pagination;
