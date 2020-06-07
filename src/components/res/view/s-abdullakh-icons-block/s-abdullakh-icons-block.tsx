import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-icons-block',
  styleUrl: 's-abdullakh-icons-block.css',
  shadow: false,
})
export class SAbdullakhIconsBlock implements ComponentInterface {
  @Prop() previewBackground: any[];

  render() {
    return (
      <div class="container-fluid preview_block">
        <div class="container">
          <div class="row">
            <IconBlocks arr={this.previewBackground}/>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const IconBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg-3 col-6">
        <s-abdullakh-icons arr={item} />
      </div>
    );
  })
}
