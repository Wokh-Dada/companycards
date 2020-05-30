import { newE2EPage } from '@stencil/core/testing';

describe('expense-management', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<expense-management></expense-management>');

    const element = await page.find('expense-management');
    expect(element).toHaveClass('hydrated');
  });
});
