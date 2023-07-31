import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.(ts|tsx|js|html)$': ['ts-jest', {
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
  roots: ['./src']
};

export default config;
