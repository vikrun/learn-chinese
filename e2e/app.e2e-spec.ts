import { LearnChinesePage } from './app.po';

describe('learn-chinese App', function() {
  let page: LearnChinesePage;

  beforeEach(() => {
    page = new LearnChinesePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('learn works!');
  });
});
