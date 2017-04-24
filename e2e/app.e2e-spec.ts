import { TheDoctorPage } from './app.po';

describe('the-doctor App', () => {
  let page: TheDoctorPage;

  beforeEach(() => {
    page = new TheDoctorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
