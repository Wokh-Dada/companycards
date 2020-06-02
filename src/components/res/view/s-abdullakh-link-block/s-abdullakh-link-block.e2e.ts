import { newE2EPage } from '@stencil/core/testing';

describe('link-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-link-block></s-abdullakh-s-abdullakh-link-block>');

    const element = await page.find('link-block');
    expect(element).toHaveClass('hydrated');
  });
});
