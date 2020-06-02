import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhExpenseManagement } from './s-abdullakh-expense-management';

describe('expense-management', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhExpenseManagement],
      html: `<expense-management></expense-management>`,
    });
    expect(page.root).toEqualHtml(`
      <expense-management>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </expense-management>
    `);
  });
});
