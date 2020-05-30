import { newSpecPage } from '@stencil/core/testing';
import { OtherFeatures } from './other-features';

describe('other-features', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OtherFeatures],
      html: `<other-features></other-features>`,
    });
    expect(page.root).toEqualHtml(`
      <other-features>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </other-features>
    `);
  });
});
