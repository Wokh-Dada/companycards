import { newE2EPage } from '@stencil/core/testing';

describe('multi-currency-slaider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<multi-currency-slaider></multi-currency-slaider>');

    const element = await page.find('multi-currency-slaider');
    expect(element).toHaveClass('hydrated');
  });
});
