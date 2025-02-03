export default {
  globalSetup: '<rootDir>/../test/setup.ts',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { diagnostics: false }],
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  rootDir: './src',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
};
