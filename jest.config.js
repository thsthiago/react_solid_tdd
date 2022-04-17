module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts.tsx}'
  ],
  coverageDirectory: 'covegare',
  textEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}