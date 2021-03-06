import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhMultiCurrencySlaider } from './s-abdullakh-multi-currency-slaider';

describe('multi-currency-slaider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhMultiCurrencySlaider],
      html: `<multi-currency-slaider></multi-currency-slaider>`,
    });
    expect(page.root).toEqualHtml(`
      <multi-currency-slaider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </multi-currency-slaider>
    `);
  });
});
