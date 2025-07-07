import { test, expect } from '@playwright/test';
import { loginPage } from '../pageObjects/loginpage'
import logindata from "../testData/login.json"

let page

let login

test.describe("Verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginPage(page)
        await login.launchURL()
    })

    test("Verify login with valid credentials", async ({ page }) => {
        // await login.loginWithCreds("Admin", "admin123")
        await login.loginWithCreds(logindata.username, logindata.password)
        await login.loginSuccess()

    })

    test("Verify login with invalid username valid password", async ({ page }) => {
        await login.loginWithCreds(logindata.wrongUsername, logindata.password)
        await login.loginError()

    })
    test("Verify login with valid username invalid password", async ({ page }) => {
        await login.loginWithCreds(logindata.username, logindata.wrongPassword)
        await login.loginError()

    })
    test("Verify login with invalid username invalid password", async ({ page }) => {
        await login.loginWithCreds(logindata.wrongUsername, logindata.wrongPassword)
        await login.loginError()

    })
})

