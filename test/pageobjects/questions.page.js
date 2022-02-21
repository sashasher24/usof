const Page = require( './page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuestionsPage extends Page {

  get firstQuestionTitle() {
    return $('.questionTitle:nth-child(1)');
  }

  async clickOnFirstQuestion () {
    console.log(this.firstQuestionTitle)
    await this.firstQuestionTitle.click();
  }

  open() {
    return super.open('questions');
  }
}

// export default new QuestionsPage();
module.exports = new QuestionsPage();
