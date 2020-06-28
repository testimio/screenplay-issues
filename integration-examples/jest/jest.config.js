'use strict';
const puppeteerPreset = require('jest-puppeteer-preset/jest-preset.json');

const runId = Date.now().toString();

module.exports = {
    ...puppeteerPreset,
    reporters: [
        ['@testim/screenplay/src/jest/reporter/default', { runId }],
    ],
    setupFilesAfterEnv: [...puppeteerPreset.setupFilesAfterEnv, '@testim/screenplay/src/jest/forJestSetupFilesAfterEnv'],
    globals: {
        runId,
    },
};
