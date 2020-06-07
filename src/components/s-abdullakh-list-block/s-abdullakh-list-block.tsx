import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-list-block',
  styleUrl: 's-abdullakh-list-block.css',
  shadow: false,
})
export class SAbdullakhListBlock implements ComponentInterface {
  /**
   * массив ListBlock
   * */
  @Prop() arr: any;

  render() {
    return (
      <li class="list_block_info_block">
        <div>
          {this.arr.text}
        </div>
      </li>
    );
  }
}
