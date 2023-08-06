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
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="Coverpage of the book"></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
