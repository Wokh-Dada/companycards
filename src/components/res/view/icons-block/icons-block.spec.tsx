import { newSpecPage } from '@stencil/core/testing';
import { IconsBlock } from './icons-block';

describe('icons-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconsBlock],
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
