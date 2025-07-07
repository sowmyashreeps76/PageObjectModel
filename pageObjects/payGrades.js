import { expect } from "@playwright/test"

  exports.addpayGrades = class addpayGrades {

    constructor(page) {

        this.page = page

        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
        this.jobSubMenu = page.locator('//span[text()="Job "]')
        this.paygradesmenu = page.locator("//a[text()='Pay Grades']")
        this.addbutton = page.locator('//button[text()=" Add "]')
        this.addpaygradeName = page.locator("//label[normalize-space(text())='Name']/following::input")
        this.saveButton = page.locator('//button[@type="submit"]')
        this.paygradeSuccess = page.locator("//h6[text() = 'Edit Pay Grade']")
    }
    async navigateToAdmin() {
        await this.adminMenu.click()
    }
    async navigateTojob() {
        await this.jobSubMenu.click()
    }
    async navigateToPayGrade(){
        await this.paygradesmenu.click()
    }
    async navigateToAddButton (){
        await this.addbutton.click()
    }
    async createPayGrade(Name) {
        await this.addpaygradeName.fill(Name)
    }
    async savepaygrade() {
        await this.saveButton.click()
    }
    async verifySuccess () {
        await expect(this.paygradeSuccess).toBeVisible()
    }
}
