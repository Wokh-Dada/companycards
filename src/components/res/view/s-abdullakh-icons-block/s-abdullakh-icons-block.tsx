import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-icons-block',
  styleUrl: 's-abdullakh-icons-block.css',
  shadow: false,
})
export class SAbdullakhIconsBlock implements ComponentInterface {
  @Prop() previewBackground: any[];

  render() {
    let blocks = this.previewBackground.map((item) => {
      return (
        <div class="col-lg-3 col-6">
          <div class="preview_block_img">
            <div class={this.bckgrndClass(item.class)}>

            </div>
          </div>
        </div>
      );
    })

    return (
      <div class="container-fluid preview_block">
        <div class="container">
          <div class="row">
            {blocks}
          </div>
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
