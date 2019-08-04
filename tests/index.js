module.exports = {
  'Running main test': function (browser) {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible('body')
      .assert.title('The powerpuff girls')
      .assert.visible('.about-show')
      .click('.about-episodes-container > a')
      .waitForElementVisible('.episode-card')
      .assert.visible('.episode-card-heading')
      .assert.visible('.back-link')
      .click('.back-link')
      .waitForElementVisible('body')
      .assert.visible('.about-episodes-container')
      .end();
  },
  'Checking the count of episodes': function (browser) {
    browser.url("http://localhost:8080/")
      .waitForElementVisible('.about-episodes-container')
      .expect.elements('.about-episodes-container a').count.to.equal(124);
  },
};
