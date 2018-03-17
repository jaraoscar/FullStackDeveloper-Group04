import { AppPipesPage } from './app.po';

describe('app-pipes App', () => {
  let page: AppPipesPage;

  beforeEach(() => {
    page = new AppPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
