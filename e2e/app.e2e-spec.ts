import { ActiveDirectoryPage } from './app.po';

describe('active-directory App', () => {
  let page: ActiveDirectoryPage;

  beforeEach(() => {
    page = new ActiveDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
