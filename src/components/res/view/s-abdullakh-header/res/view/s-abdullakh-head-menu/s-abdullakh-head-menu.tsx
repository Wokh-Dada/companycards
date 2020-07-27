import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-menu',
  styleUrl: 's-abdullakh-head-menu.css',
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
  @Prop() headNav: any[];

  /**
   * массив меню
   * */
  @Event() clickOnHeader: EventEmitter;

  /**
   * ref-ы для функции мобтльного меню
   * */
  navOpenTag: HTMLElement;
  navMenuTag: HTMLElement;

  render() {
    return (
      <div>
        <a id="menu"
           class="menu_icon"
           ref={(el) => this.navOpenTag = el}
           onClick={() => this.toggleMobileMenu()}
        >
          &#9776;
        </a>
        <div class="navbar_block" id="dNone" ref={(el) => this.navMenuTag = el}>
          <a href="#" id="menu" class="menu_icon_x" onClick={() => this.toggleMobileMenu()}>
            X
          </a>
          <div class="navbar_left_block">
            <s-abdullakh-head-nav-start headText={this.headText}/>
          </div>
          <div class="navbar_right_block">
            <nav>
              <div class="topnav_right" id="Mytopnav">
                <MenuItem
                  arr={this.headNav}
                />
                <s-abdullakh-head-nav-end headText={this.headText}/>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  /*
  * функция для открытия и закрытия мобильного меню
   */
  public toggleMobileMenu() {
    if (this.navMenuTag.id === "dNone") {
      this.navMenuTag.id = 'dFlex';
    } else {
      this.navMenuTag.id = 'dNone';
    }
  }
}


/*
* компонентная функция для вывода элементов меню
 */
const MenuItem = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="topnav_right_links_block">
        <a class="topnav_right_link" onClick={() => this.clickOnHeader.emit(item.nameLink)}>
          {item.nameLink}
        </a>
        {item.complited ?
          <div class="pop_up_nav_block">
            <s-abdullakh-head-menu-popup arr={item}/>
          </div>
          :
          ''
        }
      </div>
    );
  })
}

