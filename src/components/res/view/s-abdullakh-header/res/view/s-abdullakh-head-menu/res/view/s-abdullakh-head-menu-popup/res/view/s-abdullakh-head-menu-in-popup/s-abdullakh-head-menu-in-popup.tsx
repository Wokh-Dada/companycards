import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-menu-in-popup',
  styleUrl: 's-abdullakh-head-menu-in-popup.css',
  shadow: false,
})
export class SAbdullakhHeadMenuInPopup implements ComponentInterface {
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
     <PopupIn arr={this.arr} />
    );
  }
}

/*
* компонентная функция для вывода элементов меню popup-in-popup
 */
const PopupIn = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="pop_up_section_nav_block">
        <div class="pop_up_section_nav_link">
          <a href="#" class="pop_up_section_nav_link_a" onClick={() => this.clickOnHeader.emit(item.popupItemName)}>
            {item.popupIconComplited ?
              <span class="material-icons" onClick={() => this.clickOnHeader.emit(item.popupIcon)}>{item.popupIcon}</span> :
              ''
            }
            {item.popupItemName}
          </a>
        </div>
      </div>
    );
  })
}
