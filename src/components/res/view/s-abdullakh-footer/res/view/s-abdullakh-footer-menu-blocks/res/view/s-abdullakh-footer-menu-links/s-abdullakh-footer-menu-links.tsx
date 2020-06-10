import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer-menu-links',
  styleUrl: 's-abdullakh-footer-menu-links.css',
  shadow: false,
})
export class SAbdullakhFooterMenuLinks implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <FooterItemlink arr={this.arr}/>
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemlink = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="footer_links">
        <a href="" class="footer_link">
          {item.linkName}
        </a>
      </div>
    );
  })
}
