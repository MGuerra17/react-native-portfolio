module.exports = {
  preset: "./jest-preset.js",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|zustand)",
  ],
  collectCoverageFrom: [
    "modules/**/*.{ts,tsx}",
    "!modules/**/*.types.ts",
    "!modules/**/*.styles.ts",
    "!modules/**/index.ts",
    "!**/node_modules/**",
    "!**/*.d.ts",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
