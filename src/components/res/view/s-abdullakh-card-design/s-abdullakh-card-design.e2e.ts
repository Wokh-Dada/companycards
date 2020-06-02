import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-card-design', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-card-design></s-abdullakh-s-abdullakh-card-design>');

    const element = await page.find('s-abdullakh-card-design');
    expect(element).toHaveClass('hydrated');
  });
});
