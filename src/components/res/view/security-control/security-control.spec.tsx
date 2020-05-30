import { newSpecPage } from '@stencil/core/testing';
import { SecurityControl } from './security-control';

describe('security-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SecurityControl],
      html: `<security-control></security-control>`,
    });
    expect(page.root).toEqualHtml(`
      <security-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </security-control>
    `);
  });
});
