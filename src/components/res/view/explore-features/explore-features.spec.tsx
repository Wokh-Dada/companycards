import { newSpecPage } from '@stencil/core/testing';
import { ExploreFeatures } from './explore-features';

describe('explore-features', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExploreFeatures],
      html: `<explore-features></explore-features>`,
    });
    expect(page.root).toEqualHtml(`
      <explore-features>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </explore-features>
    `);
  });
});
