import { test, expect } from '@playwright/test';
import { loginPage } from '../../pageObjects/loginpage'
import logindata from "../../testData/login.json"
import { addpayGrades } from "../../pageObjects/payGrades"
import paygrades from "../../testData/paygrades.json"

let page
let login
let payGrades

test.describe("Verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginPage(page)
        payGrades = new addpayGrades(page)
        await login.launchURL()
        await login.loginWithCreds(logindata.username, logindata.password)
        await login.loginSuccess()
        await payGrades.navigateToAdmin()
        await payGrades.navigateTojob()
        await payGrades.navigateToPayGrade()
        await payGrades.navigateToAddButton()

    })
    test("creation of add Pay Grades", async() => {
        await payGrades.createPayGrade(paygrades.Name)
        await payGrades.savepaygrade()
        await payGrades.verifySuccess()
    })
})