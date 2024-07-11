import React from "react";
import PropTypes from "prop-types";

const ArticleList = ({ articles, onArticleClick }) => (
  <ul>
    {articles?.map((article) => (
      <li key={article?.id} onClick={() => onArticleClick(article)}>
        {article?.title}
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
  onArticleClick: PropTypes.func.isRequired,
};

export default ArticleList;
