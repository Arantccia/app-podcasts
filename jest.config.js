module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  