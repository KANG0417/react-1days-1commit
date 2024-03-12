import React from "react";
import { TBooks } from "../types/books";

type Props = {
  book: TBooks[];
};

const BookItems = ({ book }: Props) => {
  return (
    <div>
      {book.map((book, i) => {
        return <li key={i}>{book.title}</li>;
      })}
    </div>
  );
};

export default BookItems;
