import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  totalItems: number;
  itemsCountPerPage: number;
  pageCount: number;
  currentPage: number;
};

const Pagination = ({
  totalItems,
  itemsCountPerPage,
  pageCount,
  currentPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsCountPerPage);
  const [start, setStart] = useState<number>(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 > totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div>
      <ul>
        <li>
          <Link to={`?page=${start - 1}`}>이전</Link>
        </li>
        {[...Array(pageCount)].map((a, i) => (
          <>
            {start + i < totalPages && (
              <li key={i}>
                <Link to={`?page=${start + i}`}>{start + i}</Link>
              </li>
            )}
          </>
        ))}
      </ul>
      <li>
        <Link to={`?page=${start + pageCount}`}>다음</Link>
      </li>
    </div>
  );
};

export default Pagination;
