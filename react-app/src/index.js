import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
//setup vars
const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UY436_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    title: "Our Class is a Family",
    author: "Shannon Olsen",
    img: "https://m.media-amazon.com/images/I/91NBDxB0JyL._AC_UY436_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    title: "The Vanishing Half",
    author: "Brit Bennett ",
    img: "https://m.media-amazon.com/images/I/71AhaMqMsxL._AC_UY436_FMwebp_QL65_.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { title, author, img } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, author, img } = props;
  const complexEample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Coverpage of the book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type="button"
        onClick={() => {
          complexEample(author);
        }}
      >
        complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
