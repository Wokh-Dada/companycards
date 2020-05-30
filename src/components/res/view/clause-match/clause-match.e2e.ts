import { newE2EPage } from '@stencil/core/testing';

describe('clause-match', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<clause-match></clause-match>');

    const element = await page.find('clause-match');
    expect(element).toHaveClass('hydrated');
  });
});
