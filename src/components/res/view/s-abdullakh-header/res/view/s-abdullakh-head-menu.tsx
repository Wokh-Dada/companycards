import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-head-menu',
  styleUrl: 's-abdullakh-head-menu.css',
  shadow: false,
})
export class SAbdullakhHeadMenu implements ComponentInterface {
  @Prop() headNav: any[];

  navOpenTag: HTMLElement;
  navMenuTag: HTMLElement;

  public toggleMobileMenu() {
    if (this.navMenuTag.id === "dNone") {
      this.navMenuTag.id = 'dFlex';
    } else {
      this.navMenuTag.id = 'dNone';
    }
  }

  render() {

    const menuItem = this.headNav.map(function (item) {
      return (
        <div class="topnav_right_links_block">
          <a class="topnav_right_link" href="#">
            {item.nameLink}
          </a>
          {item.complited ?
            <div class="pop_up_nav_block">
              <div class="top_in_pop_up_nav_block">
                {item.popup.popupTitleComplited ?
                  < div class="title_top_in_pop_up_nav_block">
                    {item.popup.popupTitle}
                  </div> :
                  ''
                }
                <div class="pop_up_section_nav_block">
                  <div class="pop_up_section_nav_link">
                    <a href="#" class="pop_up_section_nav_link_a">
                      {item.popup.popupIconComplited ?
                        <span class="material-icons">{item.popup.popupIcon}</span> :
                        ''
                      }
                      {item.popup.popupItemName}
                    </a>
                  </div>
                </div>
              </div>
            </div> :
            ''
          }
        </div>
      );
    })


    return (
      <div >
        <a href="#" id="menu" class="menu_icon" ref={(el) => {
          this.navOpenTag = el
        }} onClick={() => this.toggleMobileMenu()}>
          &#9776;
        </a>
        <div class="navbar_block" id="dNone">
          <a href="#" id="menu" class="menu_icon_x" onClick={() => this.toggleMobileMenu()}>
            X
          </a>
          <div class="navbar_left_block">
            <nav>
              <div class="topnav" id="Mytopnav">
                <a href="#">PERSONAL</a>
                <a class="active" href="#">BUSINESS</a>
              </div>
            </nav>
          </div>
          <div class="navbar_right_block">
            <nav>
              <div class="topnav_right" id="Mytopnav">
                {menuItem}
                <div class="mobile_btn_block">
                  <a href="#" class="logIn">Log in</a>
                  <span>
                    <div class="header_btn_block">
                      <div class="input-group-append">
                        <button class="header_btn">
                          Start for free
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

}
