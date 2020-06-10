import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-nav-start',
  styleUrl: 's-abdullakh-head-nav-start.css',
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
      <nav>
        <MenuStart arr={this.headText} />
      </nav>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const MenuStart = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="topnav" id="Mytopnav">
        <a
          onClick={() => this.clickOnHeader.emit(event)}
        >
          {item.menuItemOne}
        </a>
        <a
          class="active"
          onClick={() => this.clickOnHeader.emit(event)}
        >
          {item.menuItemTwo}
        </a>
      </div>
    );
  })
}

