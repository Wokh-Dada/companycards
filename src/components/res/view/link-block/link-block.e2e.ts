import { newE2EPage } from '@stencil/core/testing';

describe('link-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-block></link-block>');

    const element = await page.find('link-block');
    expect(element).toHaveClass('hydrated');
  });
});
