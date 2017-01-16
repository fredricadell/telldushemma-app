import { TelldushemmaAppPage } from './app.po';

describe('telldushemma-app App', function() {
  let page: TelldushemmaAppPage;

  beforeEach(() => {
    page = new TelldushemmaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
