import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-link-block',
  styleUrl: 's-abdullakh-link-block.css',
  shadow: false,
})
export class SAbdullakhLinkBlock implements ComponentInterface {
  @Prop()linkBlock: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnLinkBlock: EventEmitter;

  render() {
    return (
      <div class="container link_block">
        <div class="link_block_title">
          <h2 onClick={() => this.clickOnLinkBlock.emit(this.linkBlock.title)}>
            {this.linkBlock.title}
          </h2>
        </div>
        <div class="link_block_subtitle" onClick={() => this.clickOnLinkBlock.emit(this.linkBlock.subtitle)}>
          {this.linkBlock.subtitle}
        </div>
        <div class="link_block_btn">
          <button onClick={() => this.clickOnLinkBlock.emit(this.linkBlock.btnText)}>
            {this.linkBlock.btnText}
          </button>
        </div>
      </div>
    );
  }

}
