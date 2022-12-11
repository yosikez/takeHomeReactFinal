import React from "react";
import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import "./TabsData.style.css";

const TabsData = () => {
  const navigate = useNavigate();
  const bookHandler = () => {
    navigate(`/master-data/books`);
  };
  const authorHandler = () => {
    navigate(`/master-data/author`);
  };

  return (
    <div>
      <div className="master-button">
        <Button type="primary" onClick={bookHandler}>
          Books
        </Button>
        <Button type="primary" onClick={authorHandler}>
          Author
        </Button>
      </div>
      <Outlet />
    </div>
  );
};
export default TabsData;
