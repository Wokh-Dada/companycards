import { newE2EPage } from '@stencil/core/testing';

describe('footer-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-footer-block></s-abdullakh-s-abdullakh-footer-block>');

    const element = await page.find('footer-block');
    expect(element).toHaveClass('hydrated');
  });
});
