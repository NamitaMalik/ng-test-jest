var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "./node_modules/@angular-builders/jest/dist/jest-config/setup.js"
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  testMatch: [
    './**/+(*.)+(spec).+(ts|js)?(x)'
  ],  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsConfig: "./tsconfig.spec.json",
      isolatedModules: true
    }
  }
};
