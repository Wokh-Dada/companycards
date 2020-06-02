import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header',
  styleUrl: 's-abdullakh-header.css',
  shadow: false,
})
export class SAbdullakhHeader implements ComponentInterface {
  @Prop() headNav: any[];

  navOpenTag: HTMLElement;
  navMenuTag: HTMLElement;

  public toggleMobileMenu(){
    if (this.navMenuTag.id === "dNone"){
      this.navMenuTag.id = 'dFlex';
    }else {
      this.navMenuTag.id = 'dNone';
    }
  }

  render() {

    // window.addEventListener('scroll', function() {
    //   let scrollTop = document.body.scrollTop;
    //
    //   if(scrollTop > 150) {
    //     document.getElementById('showScroll').className = 'menu_scroll';
    //   } else {
    //     document.getElementById('showScroll').className = 'menu_sticky';
    //   }
    //
    // });

    // let el = document.querySelector('.showScroll');
    //
    // window.addEventListener('scroll', toggleClassOnScroll.bind(el, 150));
    //
    // function toggleClassOnScroll(pxAmount) {
    //   let scrollTop = document.body.scrollTop;
    //
    //   if(scrollTop > pxAmount) {
    //     this.classList.add('menu_scroll');
    //   } else {
    //     this.classList.remove('menu_scroll');
    //   }
    // }

    return (
      <header class="container-fluid menu_sticky" id="showScroll">
        <div class="container">
          <div class="row main__menu px-0 mx-0">
            <div class="col-auto pr-0 mr-0">
              <div class="logo" >
                <a href="#" class="navbar-brand"/>
              </div>
            </div>

            {/*<s-abdullakh-head-menu headNav={this.headNav}/>*/}

            <div class="col mr-0 pr-0">
              <a href="#" id="menu" class="menu_icon" ref={(el) => {this.navOpenTag = el}} onClick={() => this.toggleMobileMenu()}>
                &#9776;
              </a>
              <div class="navbar_block" id="dNone" ref={(el) => {this.navMenuTag = el}}>
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
                      <a href="#">Pricing</a>
                      <div class="topnav_right_links_block">
                        <a class="topnav_right_link" href="#">
                          Product
                        </a>
                        <div class="pop_up_nav_block">
                          <div class="top_in_pop_up_nav_block">
                            <div class="title_top_in_pop_up_nav_block">
                              Features
                            </div>
                            <div class="pop_up_section_nav_block">
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">public</span>
                                  Product tour
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">account_balance_wallet</span>
                                  Account
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">swap_horiz</span>
                                  Payments
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">credit_card</span>
                                  Company cards
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">https</span>
                                  Roles & Permissions
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link ml-4">
                                <a href="#" class="pop_up_section_nav_link_a">
                                 <span class="material-icons">local_airport</span>
                                  API & Integretions
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link ml-4">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">stay_primary_portrait</span>
                                  Mobile app
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link ml-4">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">security</span>
                                  Security
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link ml-4">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">card_giftcard</span>
                                  Perks
                                </a>
                              </div>
                            </div>
                            <div class="top_in_pop_up_nav_block mt-3">
                              <div class="title_top_in_pop_up_nav_block">
                                Features
                              </div>
                              <div class="pop_up_section_nav_block">
                                <div class="pop_up_section_nav_link">
                                  <a href="#" class="pop_up_section_nav_link_a">
                                  <span class="material-icons">event_note</span>
                                    For accountants
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="topnav_right_links_block">
                        <a class="topnav_right_link" href="#">
                          Resources
                        </a>
                        <div class="pop_up_nav_block pop_up_nav_block_resources">
                          <div class="top_in_pop_up_nav_block">
                            <div class="pop_up_section_nav_block pop_up_section_nav_block_row">
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Blog
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Community
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Help centre
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Webinar
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="topnav_right_links_block">
                        <a class="topnav_right_link" href="#">Company</a>
                        <div class="pop_up_nav_block pop_up_nav_block_company">
                          <div class="top_in_pop_up_nav_block">
                            <div class="pop_up_section_nav_block pop_up_section_nav_block_row">
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  About
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Careers
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Affiates
                                </a>
                              </div>
                              <div class="pop_up_section_nav_link">
                                <a href="#" class="pop_up_section_nav_link_a">
                                  Contact cards
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
          </div>
        </div>
      </header>
    );
  }

}
