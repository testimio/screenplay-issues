'use strict';

const playwrightPreset = require("jest-playwright-preset/jest-preset.json");

const runId = Date.now().toString();

module.exports = {
    ...playwrightPreset,
    testRunner: "jasmine2",
    reporters: [
        ['@testim/screenplay/src/jest/reporter/default', { runId }],
    ],
    setupFilesAfterEnv: [...playwrightPreset.setupFilesAfterEnv, '@testim/screenplay/src/jest/forJestSetupFilesAfterEnv'],
    globals: {
        runId,
    },
};
