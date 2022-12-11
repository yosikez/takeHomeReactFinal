import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailData.style.css";

const DetailData = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/books/${id}`);

      if (res.status === 200) {
        setDetail(res.data);
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div className="detail-container">
      <img src={detail.cover} alt="" />
      <div className="content">
        <h1>{detail.title}</h1>
        <div className="desc-wrap">
          <div className="desc">
            <h4>Description</h4>
            <p>{detail.desc}</p>
          </div>
          <p>
            <strong>Author</strong> : {detail.author}
          </p>
          <p>
            <strong>Genre</strong> : {detail.genre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailData;
