import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhLinkBlock } from './s-abdullakh-link-block';

describe('link-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhLinkBlock],
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
