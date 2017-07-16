import { PmaPage } from './app.po';

describe('pma App', () => {
  let page: PmaPage;

  beforeEach(() => {
    page = new PmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
