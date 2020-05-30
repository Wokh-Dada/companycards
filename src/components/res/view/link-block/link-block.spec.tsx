import { newSpecPage } from '@stencil/core/testing';
import { LinkBlock } from './link-block';

describe('link-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LinkBlock],
      html: `<link-block></link-block>`,
    });
    expect(page.root).toEqualHtml(`
      <link-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </link-block>
    `);
  });
});
