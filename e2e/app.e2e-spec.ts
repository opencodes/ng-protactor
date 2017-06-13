import { NgProtatorPage } from './app.po';

describe('ng-protator App', () => {
  let page: NgProtatorPage;

  beforeEach(() => {
    page = new NgProtatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('2 plus 2 should be 4', () => {
    expect(page.getSumOfTwoNumber(2, 2).getText()).
      toEqual('4'); // This is wrong!
  })
});
