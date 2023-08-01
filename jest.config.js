module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js)$': ['ts-jest', {
      isolatedModules: true
    }]
  },
  testEnvironment: 'node',
  testRegex: '/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'tsx'
  ],
  collectCoverage: false,
  testTimeout: 10000000,
  roots: ['./src'],
};
