import { useState, useEffect } from "react";
import Business from "./BusinessNewsArticle";
import { BUSINESS } from "../data/businessSeed";
import BusinessNewsArticle from "./BusinessNewsArticle";

function BusinessNews(props) {
  const [businessNews, setBusinessNews] = useState([]);
  useEffect(() => {
    setBusinessNews({ BUSINESS });
  });
  return (
    <div>
      {businessNews.map((businessNews, index) => {
        return <BusinessNewsArticle {...businessNews} key={index} />;
      })}
    </div>
  );
}

export default BusinessNews;
