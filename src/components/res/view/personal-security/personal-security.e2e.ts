import { newE2EPage } from '@stencil/core/testing';

describe('personal-security', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<personal-security></personal-security>');

    const element = await page.find('personal-security');
    expect(element).toHaveClass('hydrated');
  });
});
