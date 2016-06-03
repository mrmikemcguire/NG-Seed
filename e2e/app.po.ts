export class NGSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-seed-app h1')).getText();
  }
}
