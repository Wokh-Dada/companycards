import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-icons-block',
  styleUrl: 's-abdullakh-icons-block.css',
  shadow: false,
})
export class SAbdullakhIconsBlock implements ComponentInterface {
  @Prop() previewBackground: any[];

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnIconsBlock: EventEmitter;

  render() {
    return (
      <div class="container-fluid preview_block">
        <div class="container">
          <div class="row"  onClick={() => this.clickOnIconsBlock.emit(this.previewBackground)}>
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
