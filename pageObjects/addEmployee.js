import { expect } from "@playwright/test"

  exports.addEmployeePage = class addEmployeePage {
    constructor(page) {
        this.page = page
        this.PIMMenu = page.locator("//a[@href='/web/index.php/pim/viewPimModule']")
        this.AddEmployeeSubMenu = page.locator("//a[text()='Add Employee']")
        this.firstNameInput = page.locator("//input[@name='firstName']")
        this.lastNameInput = page.locator("//input[@name='lastName']")
        this.saveButton = page.locator("//button[@type='submit']")
        this.personalDetails = page.locator("//h6[text()='Personal Details']")
        this.firstnameError = page.locator("//span[text()='Required'][1]")
        this.lastnameError = page.locator("//span[text()='Required'][2]")
    }
    async navigateToPIM() {
        await this.PIMMenu.click()
    }
    async navigateToAddEmployee() {
        await this.AddEmployeeSubMenu.click()
    }
    async createEmployee(firstName, lastName) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
    }
    async clickSaveButton() {
        await this.saveButton.click()
    }
    async verifySuccess() {
        await expect(this.personalDetails).toBeVisible()
    }
    async verifyErrorMesgforMandatoryfield() {
        await this.saveButton.click()
        await expect(this.firstnameError).toBeVisible()
        await expect(this.lastnameError).toBeVisible()
    }


}