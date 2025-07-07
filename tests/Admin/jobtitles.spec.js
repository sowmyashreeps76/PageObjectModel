import { test, expect } from '@playwright/test';
import { loginPage } from '../../pageObjects/loginpage'
import logindata from "../../testData/login.json"
import { addJobTitles } from "../../pageObjects/jobtitles"
import jobtitles from "../../testData/jobtitles.json"

let page
let login
let addJobTitle

test.describe("Verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginPage(page)
        addJobTitle = new addJobTitles(page)
        await login.launchURL()
        await login.loginWithCreds(logindata.username, logindata.password)
        await login.loginSuccess()
        await addJobTitle.navigateToAdmin()
        await addJobTitle.navigateTojob()
        await addJobTitle.navigateTojobtitle()
        await addJobTitle.navigateToAddButton()

    })
    test("creation of add job title", async() => {
        await addJobTitle.addJobTitleDetails(jobtitles.jobtitle, jobtitles.jobDescription,jobtitles.Note)
        await addJobTitle.saveJobTitle()
        await addJobTitle.verifySuccess()
    })
})