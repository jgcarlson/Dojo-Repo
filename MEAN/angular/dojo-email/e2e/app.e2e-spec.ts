import { DojoEmailPage } from './app.po';

describe('dojo-email App', () => {
  let page: DojoEmailPage;

  beforeEach(() => {
    page = new DojoEmailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
