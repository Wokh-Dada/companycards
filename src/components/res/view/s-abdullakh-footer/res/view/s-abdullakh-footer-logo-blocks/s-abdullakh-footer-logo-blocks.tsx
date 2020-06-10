import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-logo-blocks',
  styleUrl: 's-abdullakh-footer-logo-blocks.css',
  shadow: false,
})
export class SAbdullakhFooterLogoBlocks implements ComponentInterface {
  @Prop() arr: any;

  render() {
    console.log(this.arr)
    return (
      <div class="footer_logo_block">
        <a href="#" class="footer_logo">
          <svg width="19" height="23" viewBox="0 0 19 23" xmlns="http://www.w3.org/2000/svg"
               data-testid="logo-svg" class="styles__StyledLetterSvg-a7znz5-0 fCIhay">
            <defs>
              <linearGradient id="logo_letter1" x1="-3.542" x2="187.902" y1="222.275" y2="33.495"
                              gradientTransform="matrix(.10838 0 0 .11312 -.092 -.004)"
                              gradientUnits="userSpaceOnUse">
                <stop id="stop837" offset=".113" stop-color="#0D59EC"/>
                <stop id="stop839" offset=".742" stop-color="#008FE1"/>
                <stop id="stop841" offset="1" stop-color="#20AFFF"/>
              </linearGradient>
              <linearGradient id="logo_letter2" x1="-3.542" x2="187.902" y1="222.275" y2="33.495"
                              gradientTransform="matrix(.10838 0 0 .11312 -.092 -.004)"
                              gradientUnits="userSpaceOnUse">
                <stop id="stop844" offset=".113" stop-color="#0D59EC"/>
                <stop id="stop846" offset=".742" stop-color="#008FE1"/>
                <stop id="stop848" offset="1" stop-color="#20AFFF"/>
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
              <path id="letter_1" data-testid="logo-letter_1"
                    d="M8.946 4.865c-.284 1.999-.511 3.682-.92 6.303 1.105-.024 3.613.416 4.165-3.166.457-2.98-1.58-3.256-3.245-3.137z"/>
              <path id="letter_2"
                    d="M18.516 19.276c.43.957-.003 2.167-.9 2.654-.515.28-1.103.54-1.69.686A14.18 14.18 0 0112.97 23c-1.593 0-3.19-.912-3.878-2.022-.178.383-.82 1.153-1.945 1.515-.711.23-1.568.507-3.357.505-1.603-.001-2.517-.728-3-1.338-.77-.97-.883-2.202-.733-3.032l.008-.04C.67 15.553 1.497 10.035 1.878 7.27l.004-.027c.104-.767.21-1.534.273-2.306.031-.389.052-.78.056-1.17.004-.369-.03-.737-.027-1.106.004-.348.06-.7.223-1.008.265-.497.75-.889 1.263-1.06C4.233.405 4.821.33 5.406.262a46.373 46.373 0 011.798-.18A30.497 30.497 0 019.404 0c1.256-.001 2.52.02 3.758.275 1.261.26 2.535.757 3.53 1.628.682.597 1.223 1.35 1.63 2.174.356.726.501 1.49.587 2.074A8.67 8.67 0 0118.79 9.3a6.903 6.903 0 01-.913 2.122c-.474.736-1.082 1.404-1.857 2.04.472 1.37 1.702 4.046 2.496 5.814zM4.41 2.8c.03.508.034 1.02.012 1.53-.022.521-.067 1.04-.125 1.558-.057.516-.126 1.03-.196 1.544l-.023.168c-.22 1.607-.452 3.212-.695 4.814-.256 1.684-.543 3.359-.83 5.036-.133.782-.432 1.784-.023 2.53.364.666 1.298.747 1.949.68 2.371-.242 2.748-.769 2.748-.769-.473-.524-.062-2.912.414-6.122h1.685l1.764 5.335s.52 1.653 1.965 1.573c1.851-.102 3.213-.525 3.409-.76-.57-.318-2.2-4.394-3.088-7.387.43-.262.847-.547 1.24-.866.537-.438 1.035-.943 1.416-1.536.274-.426.483-.895.603-1.393.063-.263.098-.538.12-.807.04-.474.025-.954-.044-1.424-.066-.452-.165-.955-.367-1.363-.375-.763-.906-1.429-1.63-1.855-1.222-.718-2.63-.855-4.003-.93a25.333 25.333 0 00-4.463.146c-.166.02-1.845.168-1.838.298z"/>
            </g>
          </svg>
        </a>
        <FooterLogoBlocks arr={this.arr} />
      </div>

    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterLogoBlocks = (props) => {
  return props.arr.slice(0, 1).map((item) => {
    return (
      <div class="footer_logo_links">
        <a href="#" class="footer_logo_link">
          {item.menuTitle}
        </a>
        <a href="#" class="footer_logo_link active">
          {item.menuTitleActive}
        </a>
      </div>
    );
  })
}
