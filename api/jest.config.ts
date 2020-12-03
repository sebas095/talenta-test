import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  preset: '@shelf/jest-mongodb',
  moduleNameMapper: {
    '@models': '<rootDir>/src/models',
    '@routes': '<rootDir>/src/routes',
    '@services': '<rootDir>/src/services',
    '@controllers': '<rootDir>/src/controllers',
    '@middlewares': '<rootDir>/src/middlewares',
    '@repositories': '<rootDir>/src/repositories',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@mocks': '<rootDir>/tests/mocks',
    '@app': '<rootDir>/index.ts',
  },
};

export default config;
