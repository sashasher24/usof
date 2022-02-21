const questionsPage = require( '../pageobjects/questions.page');

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('Enter question page', () => {
    it('should open first question page and show the author', async () => {
        await questionsPage.open();
        await questionsPage.clickOnFirstQuestion()
        await expect($('.ownerOfQuestionInfo')).toBeDisplayed();
        });
});


