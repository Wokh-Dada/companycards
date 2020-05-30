import { newSpecPage } from '@stencil/core/testing';
import { PreHeader } from './pre-header';

describe('pre-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PreHeader],
      html: `<pre-header></pre-header>`,
    });
    expect(page.root).toEqualHtml(`
      <pre-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pre-header>
    `);
  });
});
