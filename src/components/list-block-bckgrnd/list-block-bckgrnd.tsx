import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'list-block-bckgrnd',
  styleUrl: 'list-block-bckgrnd.css',
  shadow: false,
})
export class ListBlockBckgrnd implements ComponentInterface {

  render() {
    return (
      <div class="list_block_bckgrnd">
      </div>
    );
  }

}
