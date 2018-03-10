import { AppObservablesPage } from './app.po';

describe('app-observables App', () => {
  let page: AppObservablesPage;

  beforeEach(() => {
    page = new AppObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
