module.exports = {
    collectCoverage: true,
    coverageReporters: [
      'clover',
      'text'
    ],
    detectOpenHandles: true,
    preset: 'ts-jest',
    reporters: [
        'default',
        'jest-junit',
    ],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['node_modules', '.next', 'fileMock.js'],
};
