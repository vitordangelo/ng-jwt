import { NgJwtPage } from './app.po';

describe('ng-jwt App', () => {
  let page: NgJwtPage;

  beforeEach(() => {
    page = new NgJwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
