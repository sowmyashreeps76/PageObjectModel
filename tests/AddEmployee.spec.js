import { test, expect } from '@playwright/test';
import { loginPage } from '../pageObjects/loginpage'
import logindata from "../testData/login.json"
import { addEmployeePage } from "../pageObjects/addEmployee"
import addemployee from "../testData/addEmployee.json"

let page
let login
let addEmployee

test.describe("Verify login functionality", async () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginPage(page)
        addEmployee = new addEmployeePage(page)
        await login.launchURL()
        await login.loginWithCreds(logindata.username, logindata.password)
        await login.loginSuccess()
        await addEmployee.navigateToPIM()
        await addEmployee.navigateToAddEmployee()
    })

    test("Verify creation of employee", async () => {
        await addEmployee.createEmployee(addemployee.firstname, addemployee.lastname)
        await addEmployee.clickSaveButton()
        await addEmployee.verifySuccess()
    })
    // test("Verify error messages for mandatory fields", async () => {
    //     await addEmployee.verifyErrorMesgforMandatoryfield()
    // })
})

