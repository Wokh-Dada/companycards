import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhIconsBlock } from './s-abdullakh-icons-block';

describe('icons-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhIconsBlock],
      html: `<icons-block></icons-block>`,
    });
    expect(page.root).toEqualHtml(`
      <icons-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </icons-block>
    `);
  });
});
