import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@models': '<rootDir>/src/models',
    '@services': '<rootDir>/src/services',
    '@repositories': '<rootDir>/src/repositories',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@mocks': '<rootDir>/tests/mocks',
  },
};

export default config;
