import { AppFarmaciasPage } from './app.po';

describe('app-farmacias App', () => {
  let page: AppFarmaciasPage;

  beforeEach(() => {
    page = new AppFarmaciasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
