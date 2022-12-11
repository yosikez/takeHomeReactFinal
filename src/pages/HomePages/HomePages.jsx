import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataBook } from "../../services";
import "./HomePages.style.css";

const HomePages = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const prevButton = () => {
    page === 1 ? alert("batas") : setPage((prevState) => prevState - 1);
  };
  const nextButton = () => {
    books.length < 3 ? alert("batas") : setPage((prevState) => prevState + 1);
  };

  const clickHandler = (id) => {
    navigate(`detail/${id}`);
  };

  useEffect(() => {
    getDataBook(setBooks, page);
  }, [page]);

  const Card = ({ book }) => {
    return (
      <div className="card-outer">
        <div className="card-header">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="content-card">
          <h2>{book.title}</h2>
          <p className="desc">{book.desc}</p>
        </div>
        <Button
          type="primary"
          onClick={() => {
            clickHandler(book.id);
          }}
        >
          See More
        </Button>
      </div>
    );
  };

  return (
    <div className="crd">
      <h1>Books</h1>
      <div className="data-book-card">
        {books.map((book) => (
          <Card book={book} />
        ))}
      </div>
      <div className="paginate">
        <Button onClick={prevButton} type="primary">
          Prev
        </Button>
        <Button onClick={nextButton} type="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default HomePages;
