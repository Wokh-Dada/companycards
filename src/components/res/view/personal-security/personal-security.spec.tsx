import { newSpecPage } from '@stencil/core/testing';
import { ListBlock } from '../../../list_block/list-block';

describe('personal-security', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListBlock],
      html: `<personal-security></personal-security>`,
    });
    expect(page.root).toEqualHtml(`
      <personal-security>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </personal-security>
    `);
  });
});
