import { RatsNestPage } from './app.po';

describe('rats-nest App', () => {
  let page: RatsNestPage;

  beforeEach(() => {
    page = new RatsNestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
