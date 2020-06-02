import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhFooterBlock } from './s-abdullakh-footer-block';

describe('footer-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhFooterBlock],
      html: `<footer-block></footer-block>`,
    });
    expect(page.root).toEqualHtml(`
      <footer-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </footer-block>
    `);
  });
});
