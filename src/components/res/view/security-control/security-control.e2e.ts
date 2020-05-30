import { newE2EPage } from '@stencil/core/testing';

describe('security-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<security-control></security-control>');

    const element = await page.find('security-control');
    expect(element).toHaveClass('hydrated');
  });
});
