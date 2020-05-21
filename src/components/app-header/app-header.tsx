import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: false,
})
export class AppHeader implements ComponentInterface {

  render() {


    return (
      <header class="container-fluid">
        <div class="container">
          <div class="row main__menu">
            <div class="col-auto">
              <div class="logo">
                <a href="#" class="navbar-brand"/>
              </div>
            </div>
            <div class="col mr-0">
              <a href="#" id="menu" class="menu_icon">
                &#9776;
              </a>
              <div class="d-flex">
                <div class="navbar_left_block">
                  <nav>
                    <div class="topnav" id="Mytopnav">
                      <a href="#">PERSONAL</a>
                      <a href="#">BUSINESS</a>
                    </div>
                  </nav>
                </div>

                <div class="navbar_right_block">
                  <nav>
                    <div class="topnav_right" id="Mytopnav">
                      <a href="#">Pricing</a>
                      <a href="#">Product</a>
                      <a href="#">Resources</a>
                      <a href="#">Company</a>
                      <a href="#" class="logIn">Log in</a>
                      <span>
                        <div class="header_subscribe_block">
                          <div class="input-group-append">
                            <button class="header_btn">
                                <span>
                                Subscribe
                                </span>
                            </button>
                          </div>
                        </div>
                      </span>
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
