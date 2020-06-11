import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

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

  @Event() clickOnPersonalSecurity: EventEmitter;

  @Event() clickOnExpenseManagement: EventEmitter;

  render() {
    return (
      <li class="list_block_info_block" onClick={() => this.clickOnPersonalSecurity.emit(this.arr.text)}>
        <div>
          {this.arr.text}
        </div>
      </li>
    );
  }
}
