import { newE2EPage } from '@stencil/core/testing';

describe('product-presentation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-product-presentation></s-abdullakh-product-presentation>');

    const element = await page.find('product-presentation');
    expect(element).toHaveClass('hydrated');
  });
});
