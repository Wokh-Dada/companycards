import { newE2EPage } from '@stencil/core/testing';

describe('icons-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icons-block></icons-block>');

    const element = await page.find('icons-block');
    expect(element).toHaveClass('hydrated');
  });
});
