import { ConsatDashboardPage } from './app.po';

describe('consat-dashboard App', function() {
  let page: ConsatDashboardPage;

  beforeEach(() => {
    page = new ConsatDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
