import { AppResolvePage } from './app.po';

describe('app-resolve App', () => {
  let page: AppResolvePage;

  beforeEach(() => {
    page = new AppResolvePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
