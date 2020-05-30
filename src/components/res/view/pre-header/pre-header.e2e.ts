import { newE2EPage } from '@stencil/core/testing';

describe('pre-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pre-header></pre-header>');

    const element = await page.find('pre-header');
    expect(element).toHaveClass('hydrated');
  });
});
