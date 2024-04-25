import styled from "@emotion/styled";
import React from "react";

const NewsItemStyle = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 1rem;
  padding-right: 1rem;

  .thumbnail {
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      white-space: normal;
    }
  }
`;

const NewsItem = () => {
  return (
    <NewsItemStyle>
      <div className="thumbnail">
        <a href="/" target="_blank" rel="noopnener noreferrer">
          {/* rel="noopnener noreferrer" : 어느페이지 에서 왔는지 추적 불가 */}
          <img src={`${process.env.PUBLIC_URL}/images/thumbnail.png`} />
        </a>
      </div>
      <div className="contents">
        <h2>
          <a href="/" target="_blank" rel="noopnener noreferrer">
            <p>뉴스 제목</p>
          </a>
        </h2>
        <p>뉴스 내용</p>
        <p>날짜 : 2024-04-25</p>
      </div>
    </NewsItemStyle>
  );
};

export default NewsItem;
