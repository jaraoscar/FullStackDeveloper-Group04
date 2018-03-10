import { AppModulos01Page } from './app.po';

describe('app-modulos01 App', () => {
  let page: AppModulos01Page;

  beforeEach(() => {
    page = new AppModulos01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
