import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhCardDesign } from './s-abdullakh-card-design';

describe('s-abdullakh-card-design', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhCardDesign],
      html: `<s-abdullakh-card-design></s-abdullakh-card-design>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-card-design>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-card-design>
    `);
  });
});
