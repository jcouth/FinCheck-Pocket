const jestModules = ['@react-native', 'react-native'].join('|');

export default {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/**/*.[jt]sx?',
    '!src/**/*.d.ts',
    '!src/**/__mocks__/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/svg.js',
    '\\.ttf$': '<rootDir>/__mocks__/font.js',
  },
  transformIgnorePatterns: [`node_modules/(?!${jestModules})`],
};
