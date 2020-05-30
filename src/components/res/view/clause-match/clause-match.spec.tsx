import { newSpecPage } from '@stencil/core/testing';
import { ClauseMatch } from './clause-match';

describe('clause-match', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ClauseMatch],
      html: `<clause-match></clause-match>`,
    });
    expect(page.root).toEqualHtml(`
      <clause-match>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </clause-match>
    `);
  });
});
