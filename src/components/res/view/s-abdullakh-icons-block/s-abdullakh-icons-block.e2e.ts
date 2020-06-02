import { newE2EPage } from '@stencil/core/testing';

describe('icons-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-icons-block></s-abdullakh-s-abdullakh-icons-block>');

    const element = await page.find('icons-block');
    expect(element).toHaveClass('hydrated');
  });
});
