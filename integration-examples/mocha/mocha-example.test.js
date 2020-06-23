const puppeteer = require('puppeteer');
const { attach, updateHistoryFromScreenplayResultsOnly } = require('@testim/screenplay');
describe("screenplay mocha example", () => {
    let browser;
    let page;
    let endTest;
    let runId;

    before(async () => {
        browser = await puppeteer.launch();
        runId = Date.now().toString();
    });

    beforeEach(async function () {
        const startTestParams = {
            runId,
            projectRoot: process.cwd(),
            fullName: this.currentTest.fullTitle(),
            description: this.currentTest.title,
            fullSuitePath: __filename,
        };

        ({ page, endTest } = await attach({ page: await browser.newPage(), startTestParams }));
    });

    afterEach(async function () {
        if (this.currentTest && this.currentTest.err) {
            await endTest({
                success: false,
                error: this.currentTest.err
            });
        } else {
            await endTest({
                success: true
            });
        }

        await page.close();
    });

    after(async () => {
        await updateHistoryFromScreenplayResultsOnly(runId);
        await browser.close();
    });

    it('returns Chrome Puppeteer Github repo as first search result', async () => {
        await page.goto("https://github.com");
        await page.click('#some-element');
    }).timeout(10000)

    it('Yet Another test', async () => {
        await page.goto("https://google.com");
        await page.click('#lbalblabal');
    }).timeout(10000);

    it('Yet Another test 3', async () => {
        await page.goto("https://ynet.co.il");
        await page.click('#lbalblabal');
    }).timeout(10000);

    it('Yet Another test 4 pass!!!', async () => {
        await page.goto("https://wikipedia.org");
    }).timeout(10000);
});
