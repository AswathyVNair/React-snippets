import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
//setup vars
import { books } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="bookList">
      {books.map((book) => {
        const { title, author, img } = book;
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
