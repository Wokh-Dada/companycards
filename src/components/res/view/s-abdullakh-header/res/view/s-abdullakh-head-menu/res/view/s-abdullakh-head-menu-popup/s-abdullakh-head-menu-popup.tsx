import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-menu-popup',
  styleUrl: 's-abdullakh-head-menu-popup.css',
  shadow: false,
})
export class SAbdullakhHeadMenuPopup implements ComponentInterface {
  /**
   * массив меню в popup
   * */
  @Prop() arr: any;

  /**
   * массив меню
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <Popup arr={this.arr}/>
    );
  }
}

/*
* компонентная функция для вывода элементов меню popup
 */
const Popup = (props) => {
  return props.arr.popup.map((item) => {
    return (
      <div class="top_in_pop_up_nav_block">
        {item.popupTitleComplited ?
          < div class="title_top_in_pop_up_nav_block" onClick={() => this.clickOnHeader.emit(item.popupTitle)} >
            {item.popupTitle}
          </div>
          :
          ''
        }
        <s-abdullakh-head-menu-in-popup arr={item.popupLinks}/>
      </div>
    );
  })
}
