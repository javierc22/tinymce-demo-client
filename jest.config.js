module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/unit/vueSetup.js'],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  preset: '@vue/cli-plugin-unit-jest'
}
