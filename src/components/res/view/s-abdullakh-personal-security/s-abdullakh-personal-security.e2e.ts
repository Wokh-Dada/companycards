import { newE2EPage } from '@stencil/core/testing';

describe('personal-security', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-personal-security></s-abdullakh-s-abdullakh-personal-security>');

    const element = await page.find('personal-security');
    expect(element).toHaveClass('hydrated');
  });
});
