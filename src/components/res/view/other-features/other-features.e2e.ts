import { newE2EPage } from '@stencil/core/testing';

describe('other-features', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<other-features></other-features>');

    const element = await page.find('other-features');
    expect(element).toHaveClass('hydrated');
  });
});
