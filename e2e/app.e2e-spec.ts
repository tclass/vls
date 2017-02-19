import { VlsPage } from './app.po';

describe('vls App', function() {
  let page: VlsPage;

  beforeEach(() => {
    page = new VlsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
