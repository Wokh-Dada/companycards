import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-menu-blocks',
  styleUrl: 's-abdullakh-footer-menu-blocks.css',
  shadow: false,
})
export class SAbdullakhFooterMenuBlocks implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <div class="footer_links_block footer_links_wrapper">
      <FooterItemMenuBlocks arr={this.arr} />
      </div>
    );
  }
}
/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemMenuBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="mb-4">
        <div class="footer_title">
          {item.title}
        </div>
        <s-abdullakh-footer-menu-links arr={item.items} />
      </div>
    );
  })
}
