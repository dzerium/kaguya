module.exports = {
  setupFiles: [
    'dotenv/config'
  ],
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['text', 'cobertura']
}
