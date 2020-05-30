import { newE2EPage } from '@stencil/core/testing';

describe('card-design', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-design></card-design>');

    const element = await page.find('card-design');
    expect(element).toHaveClass('hydrated');
  });
});
