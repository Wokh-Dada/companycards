import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'pre-header',
  styleUrl: 'pre-header.css',
  shadow: false,
})
export class PreHeader implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="cookes_main_block">

          <div class="cookes_left_block">
            <span>
              We use   &#9762; cookies to personalise your experience on Revolut.
            </span>

            <a href="">
              Learn more
            </a>
          </div>


          <div class="cookes_right_block">
            <button class="manage_cookes_btn">
              Manage Cookies
            </button>
            <button class="accent_cookes_btn">
              Accept
            </button>
          </div>

        </div>
      </div>
    );
  }

}
