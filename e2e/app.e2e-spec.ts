import { GastosMensualesPage } from './app.po';

describe('gastos-mensuales App', () => {
  let page: GastosMensualesPage;

  beforeEach(() => {
    page = new GastosMensualesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
