import { render, screen, fireEvent } from "@testing-library/react";
import ArticleList from "./ArticleList";
import React from "react";
import mockArticles from "../__mocks__/articles";

test("renders list of articles", () => {
  render(<ArticleList articles={mockArticles} onArticleClick={jest.fn()} />);
  expect(screen.getByText("Article 1")).toBeInTheDocument();
  expect(screen.getByText("Article 2")).toBeInTheDocument();
});

test("calls onArticleClick when an article is clicked", () => {
  const handleArticleClick = jest.fn();
  render(
    <ArticleList articles={mockArticles} onArticleClick={handleArticleClick} />
  );
  fireEvent.click(screen.getByText("Article 1"));
  expect(handleArticleClick).toHaveBeenCalledWith(mockArticles[0]);
});
