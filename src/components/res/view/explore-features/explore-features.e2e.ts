import { newE2EPage } from '@stencil/core/testing';

describe('explore-features', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<explore-features></explore-features>');

    const element = await page.find('explore-features');
    expect(element).toHaveClass('hydrated');
  });
});
