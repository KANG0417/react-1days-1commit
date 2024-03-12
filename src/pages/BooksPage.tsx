import React, { useEffect, useState } from "react";
import { TBooks } from "../types/books";
import { useSearchParams } from "react-router-dom";
import BookItems from "../commponents/BookItems";
import Pagination from "../commponents/Pagination";
import axios from "axios";

const BooksPage = () => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [books, setBooks] = useState<TBooks[] | null>(null);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "http://www.aladin.co.kr/ttb/api/test/ItemList_20131101.js"
        );
        setBooks(reponse.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response);
        }
      }
    };

    fetchData();
  }, [page]);

  console.log(books);

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <div className="list">
          {books && (
            <>
              {books.map((book) => {
                {
                  book;
                }
                // <BookItems book={book} key={i} />;
              })}
            </>
          )}
        </div>
        <Pagination
          totalItems={totalItems}
          currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1}
          pageCount={5}
          itemsCountPerPage={50}
        />
      </div>
    </div>
  );
};

export default BooksPage;
