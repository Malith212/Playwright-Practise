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
    const cardNumber = page.locator("//input[@type='text']").nth(0);
    const expiryMonth = page.locator("//select[@class='input ddl']").nth(0);
    const expiryYear = page.locator("//select[@class='input ddl']").nth(1);
    const cvv = page.locator("//input[@type='text']").nth(1);
    const nameOnCard = page.locator("//input[@type='text']").nth(2);
    const coupenCode = page.locator("//input[@type='text']").nth(3);
    const shippingCountry = page.locator("//input[@placeholder='Select Country']");
    const placeOrderBtn = page.locator("//a[text()='Place Order ']");
    const orderPage = page.locator("//button[@routerlink='/dashboard/myorders']");
    const srilankaOption = page.locator("//span[text()=' Sri Lanka']");
    const orderConfirmationMsg = page.locator("//h1");
    const orderIdLocator = page.locator("//label[@class='ng-star-inserted']");

    //values
    const emailValue = "navindumalith0@gmail.com";
    const passwordValue = "Malith123@";
    const productName = "ADIDAS ORIGINAL";
    const cardNumberValue = "42424242424242424";
    const expiryMonthValue = "12";
    const expiryYearValue = "29";
    const cvvValue = "123";
    const nameOnCardValue = "Navindu Malith";
    const coupenCodeValue = "rahulshettyacademy";
    const shippingCountryValue = "Sri Lanka";

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

    await cardNumber.fill(cardNumberValue); 
    await expiryMonth.selectOption(expiryMonthValue);
    await expiryYear.selectOption(expiryYearValue);
    await cvv.fill(cvvValue);
    await nameOnCard.fill(nameOnCardValue);
    await coupenCode.fill(coupenCodeValue);
    await shippingCountry.pressSequentially(shippingCountryValue);
    await srilankaOption.click();
    await placeOrderBtn.click();

    await expect(orderConfirmationMsg).toHaveText(" Thankyou for the order. ");

    const orderId = await orderIdLocator.textContent();
    console.log("Order ID: " + orderId);



    await page.waitForTimeout(5000);


    await page.pause();






    
})