import React from "react";

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

export default Book;
