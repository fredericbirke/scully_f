/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  projects: ['<rootDir>/tests/jest/src'],
  coverageDirectory: '../../../coverage/custom-test-set',
};
