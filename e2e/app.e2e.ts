import { NGSeedPage } from './app.po';

describe('ng-seed App', function() {
  let page: NGSeedPage;

  beforeEach(() => {
    page = new NGSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-seed works!');
  });
});
