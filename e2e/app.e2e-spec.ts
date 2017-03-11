import { TestownikPage } from './app.po';

describe('testownik App', () => {
  let page: TestownikPage;

  beforeEach(() => {
    page = new TestownikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
