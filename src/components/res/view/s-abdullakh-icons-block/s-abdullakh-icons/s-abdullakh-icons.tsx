import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-icons',
  styleUrl: 's-abdullakh-icons.css',
  shadow: false,
})
export class SAbdullakhIconsBlock implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <div class="preview_block_img">
        <div class={this.bckgrndClass(this.arr.class)}>
        </div>
      </div>
    );
  }

  public bckgrndClass(x) {
    switch (x) {
      case 'one':
        return 'preview_img_one';

      case 'two':
        return 'preview_img_two';

      case 'three':
        return 'preview_img_three';

      case 'four':
        return 'preview_img_four';
    }
  }

}
