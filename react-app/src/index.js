import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
//setup vars
const firstBook = {
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
  img: "https://static.tvtropes.org/pmwiki/pub/images/81eb7ckul.jpg",
};

const secondBook = {
  title: "Our Class is a Family",
  author: "Shannon Olsen",
  img: "https://m.media-amazon.com/images/I/91NBDxB0JyL._AC_UY436_FMwebp_QL65_.jpg",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="Coverpage of the book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
