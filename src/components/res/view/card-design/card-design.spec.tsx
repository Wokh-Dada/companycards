import { newSpecPage } from '@stencil/core/testing';
import { CardDesign } from './card-design';

describe('card-design', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardDesign],
      html: `<card-design></card-design>`,
    });
    expect(page.root).toEqualHtml(`
      <card-design>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-design>
    `);
  });
});
