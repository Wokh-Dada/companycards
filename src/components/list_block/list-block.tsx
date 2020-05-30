import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'list-block',
  styleUrl: 'list-block.css',
  shadow: false,
})
export class ListBlock implements ComponentInterface {
  @Prop() text: any[];
  @Prop() titl: any[];


  render() {

    let zagol = this.titl.map((item) => {
      return (
        <h3>
          {item.title}
        </h3>
      );
    })

    let listLi = this.text.map((item) => {
      return (
        <li class="list_block_info_block">
          <div>
            {item.text}
          </div>
        </li>
      );
    })


    return (
      <div class="list_block">
        <div class="list_block_title">
          {zagol}
        </div>
        <ul class="list_block_info_blocks">
          {listLi}
        </ul>
      </div>

    );
  }

}
