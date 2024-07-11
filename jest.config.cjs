module.exports = {
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
};
