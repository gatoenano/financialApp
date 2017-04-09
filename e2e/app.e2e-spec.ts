import { AssetsAppPage } from './app.po';

describe('assets-app App', () => {
  let page: AssetsAppPage;

  beforeEach(() => {
    page = new AssetsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
