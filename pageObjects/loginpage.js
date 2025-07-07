import { expect } from "@playwright/test"

exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page

        this.usernameInput = page.locator("//input[@name='username']")
        this.passwordInput = page.locator("//input[@type='password']")
        this.loginButton = page.locator("//button[@type='submit']")
        this.logo = page.getByAltText('company-branding')
        this.loginerror = page.getByText('Invalid credentials')
    }
     
    async launchURL() {
        await this.page.goto("/web/index.php/auth/login")
    }

    async loginWithCreds (username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
    async loginError() {
        await expect (this.loginerror).toBeVisible()
    }
    async loginSuccess() {
        await expect (this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
}

}
