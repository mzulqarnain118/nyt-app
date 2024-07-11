import { render, screen } from "@testing-library/react";
import ArticleDetail from "./ArticleDetail";
import React from "react";

const mockArticle = {
  title: "Article Title",
  abstract: "Article Abstract",
  url: "http://example.com",
};

test("renders article details", () => {
  render(<ArticleDetail article={mockArticle} />);
  expect(screen.getByText("Article Title")).toBeInTheDocument();
  expect(screen.getByText("Article Abstract")).toBeInTheDocument();
  expect(screen.getByText("Read more")).toHaveAttribute(
    "href",
    "http://example.com"
  );
});
