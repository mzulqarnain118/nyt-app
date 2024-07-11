# NY Times Most Popular Articles App

A React application that fetches and displays the most popular articles from the New York Times API.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Generating Coverage Reports](#generating-coverage-reports)
- [Environment Variables](#environment-variables)

## Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/your-username/nyt-most-popular-articles.git
   cd nyt-most-popular-articles
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then, run:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following content:
   ```env
   VITE_NYT_API_KEY=your_api_key_here
   ```

## Running the Application

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Running Tests

### Unit Tests

To run unit tests using Jest and React Testing Library, run:

```sh
npm run test
```

### End-to-End Tests

To run end-to-end tests using Cypress, first ensure the development server is running, then in a separate terminal, run:

```sh
npx cypress open
```

In the Cypress window, select `E2E Testing` and then select your preferred browser to start the tests.

## Generating Coverage Reports

To generate test coverage reports, run:

```sh
npm run test:coverage
```

The coverage report will be generated in the `coverage` directory.

## Environment Variables

This project uses the following environment variables:

- `VITE_NYT_API_KEY`: Your New York Times API key.

Ensure you have created a `.env` file at the root of the project with your API key:

```env
VITE_NYT_API_KEY=your_api_key_here
```

## Additional Scripts

- **Linting**:
  To run linting using ESLint, execute:

  ```sh
  npm run lint
  ```

- **Build**:
  To build the project for production, run:

  ```sh
  npm run build
  ```

- **Serve**:
  To preview the production build locally, run:
  ```sh
  npm run serve
  ```

---
