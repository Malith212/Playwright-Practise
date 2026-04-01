import { test, expect, request } from '@playwright/test';
const loginPayload = {userEmail: "navindumalith0@gmail.com", userPassword: "Malith123@"};
let token;

test.beforeAll(async () =>{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    });

    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
});

test('Open Web API Part 1', async ({ browser }) => {
    const context = await browser.newContext();

    await context.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client');

    await page.waitForTimeout(5000);

    const cardTitle = page.locator(".card-body b");
    await cardTitle.first().waitFor();

    console.log(await cardTitle.allTextContents());
});