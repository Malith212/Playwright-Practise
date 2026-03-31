import { test, expect, request } from '@playwright/test';
const loginPayload = {userEmail: "navindumalith0@gmail.com", userPassword: "Malith123@"};

test.beforeAll(async () =>{
    console.log("Before all tests");

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    });
    expect(loginResponse.ok()).toBeTruthy();
    
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;

    console.log(token);
});


test.beforeEach(() =>{
    
});

test.only('Open Web API Part 1', async ({ page }) => { 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const username = page.locator('#userEmail');
    const password = page.locator("[type='password']");  
    const logIn = page.locator("#login");

    await username.fill("navindumalith0@gmail.com");
    await password.fill("Malith123@");
    await logIn.click();

    await page.waitForTimeout(10000);

    const cardTitle = await page.locator(".card-body b");
    
    // await page.waitForLoadState('networkidle');//flicky

    await cardTitle.first().waitFor();

    const allTitles = await cardTitle.allTextContents();

    console.log(allTitles);
});