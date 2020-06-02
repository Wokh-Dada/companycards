import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-security-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-security-control></s-abdullakh-security-control>');

    const element = await page.find('s-abdullakh-security-control');
    expect(element).toHaveClass('hydrated');
  });
});
