import { expect } from "@playwright/test"

  exports.addJobTitles = class addJobTitles {

    constructor(page) {

        this.page = page

        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
        this.jobSubMenu = page.locator('//span[text()="Job "]')
        this.jobTitlesSubMenu = page.locator('//a[text() = "Job Titles"]')
        this.addButton = page.locator('//button[text()=" Add "]')
        this.jobTitleInput = page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]")
        this.jobDescriptionInput = page.locator('//textarea[@placeholder="Type description here"]')
        this.noteInput = page.locator('//textarea[@placeholder="Add note"]')
        this.saveButton = page.locator('//button[@type="submit"]')
        this.jobTitleSuccess = page.locator('//h6[text() = "Job Titles"]')
    }
    async navigateToAdmin() {
        await this.adminMenu.click()
    }
    async navigateTojob() {
        await this.jobSubMenu.click()
    }
    async navigateTojobtitle(){
        await this.jobTitlesSubMenu.click()
    }
    async navigateToAddButton (){
        await this.addButton.click()
    }
    async addJobTitleDetails (jobTitle,jobDescription,note) {
        await this.jobTitleInput.fill(jobTitle)
        await this.jobDescriptionInput.fill(jobDescription)
        await this.noteInput.fill(note)
    }
    async saveJobTitle () {
        await this.saveButton.click()
    }
    async verifySuccess () {
        await expect(this.jobTitleSuccess).toBeVisible()
    }
}