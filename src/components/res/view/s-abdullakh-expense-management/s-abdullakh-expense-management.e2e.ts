import { newE2EPage } from '@stencil/core/testing';

describe('expense-management', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-s-abdullakh-expense-management></s-abdullakh-s-abdullakh-expense-management>');

    const element = await page.find('expense-management');
    expect(element).toHaveClass('hydrated');
  });
});
