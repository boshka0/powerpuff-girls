module.exports = {
  'Running main test': function (browser) {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible('body')
      .assert.title('The powerpuff girls')
      .assert.visible('.about-show')
      .click('.about-episodes__container > a')
      .waitForElementVisible('.episode-card')
      .assert.visible('.episode-card__heading')
      .assert.visible('.back-link')
      .click('.back-link')
      .waitForElementVisible('body')
      .assert.visible('.about-episodes__container')
      .expect.elements('.about-episodes__container a').count.to.equal(124);
  },
};
