import { newSpecPage } from '@stencil/core/testing';
import { ProductPresentation } from './product-presentation';

describe('product-presentation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductPresentation],
      html: `<product-presentation></product-presentation>`,
    });
    expect(page.root).toEqualHtml(`
      <product-presentation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-presentation>
    `);
  });
});
