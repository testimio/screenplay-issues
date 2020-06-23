'use strict';
const puppeteerPreset = require('jest-puppeteer-preset/jest-preset.json');

const runId = Date.now().toString();

module.exports = {
    ...puppeteerPreset,
    reporters: [
        'default',
        ['@testim/screenplay/src/jest/reporter/RunConclusion', { runId }],
    ],
    setupFilesAfterEnv: [...puppeteerPreset.setupFilesAfterEnv, '@testim/screenplay/src/jest/forJestSetupFilesAfterEnv'],
    globals: {
        runId,
    },
};
