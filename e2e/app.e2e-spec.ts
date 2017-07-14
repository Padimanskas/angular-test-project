import { ANGULARTESTPROJECTPage } from './app.po';

describe('angular-test-project App', () => {
  let page: ANGULARTESTPROJECTPage;

  beforeEach(() => {
    page = new ANGULARTESTPROJECTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
