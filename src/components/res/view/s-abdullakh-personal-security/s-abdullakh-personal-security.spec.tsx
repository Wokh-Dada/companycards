import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhListBlock } from '../../../s-abdullakh-list-block/s-abdullakh-list-block';

describe('personal-security', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhListBlock],
      html: `<s-abdullakh-personal-security></s-abdullakh-personal-security>`,
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
