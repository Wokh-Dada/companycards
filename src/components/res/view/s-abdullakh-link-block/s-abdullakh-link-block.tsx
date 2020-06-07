import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-link-block',
  styleUrl: 's-abdullakh-link-block.css',
  shadow: false,
})
export class SAbdullakhLinkBlock implements ComponentInterface {
  @Prop()linkBlock: any;

  render() {
    return (
      <div class="container link_block">
        <div class="link_block_title">
          <h2>
            {this.linkBlock.title}
          </h2>
        </div>
        <div class="link_block_subtitle">
          {this.linkBlock.subtitle}
        </div>
        <div class="link_block_btn">
          <button>
            {this.linkBlock.btnText}
          </button>
        </div>
      </div>
    );
  }

}
