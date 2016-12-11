import { ZadraPortfolioPage } from './app.po';

describe('zadra-portfolio App', function() {
  let page: ZadraPortfolioPage;

  beforeEach(() => {
    page = new ZadraPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
