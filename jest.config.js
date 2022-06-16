/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "node_modules/(?!(uuid)/)"
  ],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/src/utils/styleMock.ts"
  }
};