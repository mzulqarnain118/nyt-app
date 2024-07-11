import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ArticleContainer from "./ArticleContainer";
import { fetchMostPopularArticles } from "../services/api";
import mockArticles from "../__mocks__/articles";

jest.mock("../services/api");

describe("ArticleContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<ArticleContainer />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("fetches and displays articles", async () => {
    fetchMostPopularArticles.mockResolvedValue({ results: mockArticles });

    render(<ArticleContainer />);

    const articles = await waitFor(() => screen.findAllByRole("listitem"));
    expect(articles).toHaveLength(mockArticles.length);
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });

  test("displays error message on fetch failure", async () => {
    fetchMostPopularArticles.mockResolvedValue({ error: "Failed to fetch" });

    render(<ArticleContainer />);

    const errorMessage = await waitFor(() =>
      screen.getByText(/Error: Failed to fetch/i)
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays article details when an article is clicked", async () => {
    fetchMostPopularArticles.mockResolvedValue({ results: mockArticles });

    render(<ArticleContainer />);

    const article = await waitFor(() =>
      screen.getByText(mockArticles[0].title)
    );
    fireEvent.click(article);

    expect(screen.getByText(mockArticles[0].abstract)).toBeInTheDocument();
    expect(screen.getByText("Read more")).toHaveAttribute(
      "href",
      mockArticles[0].url
    );
  });
});
