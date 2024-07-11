import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../services/api";
import ArticleList from "../components/ArticleList";
import ArticleDetail from "../components/ArticleDetail";

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      const result = await fetchMostPopularArticles();

      if (result.error) {
        setError(result.error);
      } else {
        setArticles(result.results);
      }
    };

    getArticles();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ArticleList articles={articles} onArticleClick={setSelectedArticle} />
      {selectedArticle && <ArticleDetail article={selectedArticle} />}
    </div>
  );
};

export default ArticleContainer;
