import { browser, element, by } from 'protractor';

export class LearnChinesePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('learn-root h1')).getText();
  }
}
