import React from "react";
import NewsItem from "./NewsItem";
import styled from "@emotion/styled";

const NewsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  width: 768px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 769px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  return (
    <div className="newslist">
      <NewsListStyle>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </NewsListStyle>
    </div>
  );
};

export default NewsList;
