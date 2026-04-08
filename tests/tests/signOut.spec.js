import { test, expect } from '@playwright/test';

test.only('Place an order', async ({ page }) => {

    //locators
    const email = page.locator("//input[@type='email']");
    const password = page.locator("//input[@type='password']");
    const loginBtn = page.locator("//input[@type='submit']");


    //values
    const emailValue = "navindumalith0@gmail.com";
    const passwordValue = "Malith123@";


    await page.goto('https://rahulshettyacademy.com/client');

    await email.fill(emailValue);
    await password.fill(passwordValue);
    await loginBtn.click();

    //add wait
    await page.waitForTimeout(5000);

})