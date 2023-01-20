module.exports = {
  displayName: 'plugins-scully-plugin-base-href-rewrite',
  preset: '../../../jest.preset.mjs',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/plugins/scully-plugin-base-href-rewrite',
};