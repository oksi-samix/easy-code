module.exports = {
  verbose: true,
  setupFiles: ['../config/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'babel-jest',
    '^services$': '<rootDir>/services/',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^store$': '<rootDir>/store/',
    '^store/(.*)$': '<rootDir>/store/$1'
  },
  rootDir: '../src',

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!/**/(index|actions|reducers|store).js',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
