import React from "react";
import PropTypes from "prop-types";

const ArticleDetail = ({ article }) => (
  <div>
    <h2>{article?.title}</h2>
    <p>{article?.abstract}</p>
    <a href={article?.url} target="_blank" rel="noopener noreferrer">
      Read more
    </a>
  </div>
);

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    abstract: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ArticleDetail;
