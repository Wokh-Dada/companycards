import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhPreHeader } from './s-abdullakh-pre-header';

describe('pre-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhPreHeader],
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
