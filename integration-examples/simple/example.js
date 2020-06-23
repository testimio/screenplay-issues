const puppeteer = require("puppeteer");
const screenplay = require("@testim/screenplay");
const assert = require("assert");
(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const { page, endTest } = await screenplay.attach({ page: await browser.newPage() });
    await page.setViewport({
        width: 1400,
        height: 800,
        deviceScaleFactor: 2,
    });
    try {
        await page.goto("https://demo.testim.io/");
        await page.click(".Hero__form-box___126DY > :nth-child(1) [type='text']");
        await page.click(".theme__days___3kAIy > div:nth-of-type(24) span");
        await page.click("[role='navigation'] > :nth-child(2)");
        await page.click(".Hero__form-box___126DY > :nth-child(2) [type='text']");
        await page.click(".theme__days___3kAIy > div:nth-of-type(26) span");
        await page.click("[role='navigation'] > :nth-child(2)");
        await page.click(".Hero__form-box___126DY > :nth-child(3) .theme__inputElement___27dyY");
        await page.click(".theme__active___31xyK .theme__values___1jS4g > :nth-child(4)");
        await page.click(".Hero__form-box___126DY > :nth-child(4) .theme__inputElement___27dyY");
        await page.click(".theme__active___31xyK .theme__values___1jS4g > :nth-child(3)");
        await page.click(".Hero__cta-button___9VskW");
        await scrollToElement(page, ".Gallery__items-box___2hOZl > :nth-child(2) .theme__button___1iKuo");
        await page.click(".Gallery__items-box___2hOZl > :nth-child(2) .theme__button___1iKuo");
        await page.click("[maxlength='30']");
        await page.type("[maxlength='30']", 'Heya');
        await sendSpecialCharacter(page, "[maxlength='30']", 'Tab');
        await page.type("[type='email']", 'me@universe.com');
        endTest({ success: true, data: undefined });
    }
    catch (error) {
        endTest({ success: false, error });
        throw error;
    }
    finally {
        screenplay.updateHistoryFromScreenplayResultsOnly();
        await browser.close();
    }
})();

async function sendSpecialCharacter(page, selector, key) {
    const elementHandle = await page.$(selector);
    await elementHandle.press(key);
}
async function scrollToElement(page, selector) {
    await page.evaluate((selector) => {
        const element = document.querySelector(selector);
        element.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
    }, selector);
}
