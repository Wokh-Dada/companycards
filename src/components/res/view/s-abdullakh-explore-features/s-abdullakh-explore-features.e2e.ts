import { newE2EPage } from '@stencil/core/testing';

describe('explore-features', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-explore-features></s-abdullakh-s-abdullakh-explore-features>');

    const element = await page.find('explore-features');
    expect(element).toHaveClass('hydrated');
  });
});
