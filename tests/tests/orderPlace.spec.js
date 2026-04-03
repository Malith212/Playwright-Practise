import {test, expect} from '@playwright/test';

test.only('Place an order', async ({ page }) => {

    //locators
    const email = page.locator("//input[@type='email']");
    const password = page.locator("//input[@type='password']");
    const loginBtn = page.locator("//input[@type='submit']");
    const searchField = page.locator("//input[@name='search']").nth(1);
    const addToCartBtn = page.locator("//button[@class='btn w-10 rounded']");
    const cartPage = page.locator("//button[@routerlink='/dashboard/cart']");
    const checkoutBtn = page.locator("//button[text()='Checkout']");

    //values
    const emailValue = "navindumalith0@gmail.com";
    const passwordValue = "Malith123@";
    const productName = "ADIDAS ORIGINAL";

    await page.goto('https://rahulshettyacademy.com/client');

    await email.fill(emailValue);
    await password.fill(passwordValue);
    await loginBtn.click();

    await searchField.fill(productName);

    //press enter key
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);

    await addToCartBtn.click();
    await cartPage.click();
    await checkoutBtn.click();

    await page.waitForTimeout(5000);






    
})