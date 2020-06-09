import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-nav-end',
  styleUrl: 's-abdullakh-head-nav-end.css',
  shadow: false,
})
export class SAbdullakhHeadMenu implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() headText: any;

  /**
   * массив меню
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <MenuEnd arr={this.headText} />
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const MenuEnd = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="mobile_btn_block">
        <a
          class="logIn"
          onClick={() => this.clickOnHeader.emit(event)}
        >
          {item.logIn}
        </a>
        <span>
          <div class="header_btn_block">
            <div class="input-group-append">
              <button
                class="header_btn"
                onClick={() => this.clickOnHeader.emit(event)}
              >
                {item.btnText}
              </button>
            </div>
          </div>
        </span>
      </div>
    );
  })
}

