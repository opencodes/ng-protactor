import { browser, by, element } from 'protractor';

export class NgProtatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

 
  getSumOfTwoNumber(a, b){
    element(by.id('a')).sendKeys(a);
    element(by.id('b')).sendKeys(b);

    element(by.id('gobutton')).click();
    return element(by.id('sum'))
  }
}
