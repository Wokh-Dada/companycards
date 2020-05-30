import { newSpecPage } from '@stencil/core/testing';
import { ExpenseManagement } from './expense-management';

describe('expense-management', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExpenseManagement],
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
