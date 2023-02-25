/** @type {import('ts-jest').JestConfigWithTsJest} */
import * as path from 'path';
import { Config } from 'jest';


const config: Config = {
  preset: 'ts-jest/presets/js-with-babel-esm',
  rootDir: 'src',
  coverageDirectory: path.resolve(__dirname, 'coverage')
};

export default config;