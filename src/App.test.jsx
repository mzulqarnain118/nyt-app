import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./services/api"); // Mock the API calls

const mockArticles = [
  {
    id: 1,
    title: "Article 1",
    abstract: "Abstract 1",
    url: "http://example.com/1",
  },
  {
    id: 2,
    title: "Article 2",
    abstract: "Abstract 2",
    url: "http://example.com/2",
  },
];

beforeEach(() => {
  api.fetchMostPopularArticles.mockResolvedValue({
    data: { results: mockArticles },
  });
});

test("renders app title", () => {
  render(<App />);
  expect(
    screen.getByText(/NY Times Most Popular Articles/i)
  ).toBeInTheDocument();
});

test("fetches and displays articles", async () => {
  render(<App />);
  const articles = await screen.findAllByRole("listitem");
  expect(articles).toHaveLength(2);
  expect(screen.getByText("Article 1")).toBeInTheDocument();
  expect(screen.getByText("Article 2")).toBeInTheDocument();
});

test("shows article details when an article is clicked", async () => {
  render(<App />);
  const article = await screen.findByText("Article 1");
  fireEvent.click(article);
  expect(screen.getByText("Abstract 1")).toBeInTheDocument();
  expect(screen.getByText("Read more")).toHaveAttribute(
    "href",
    "http://example.com/1"
  );
});
