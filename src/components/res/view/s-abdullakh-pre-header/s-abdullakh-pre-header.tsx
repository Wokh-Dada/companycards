import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';


@Component({
  tag: 's-abdullakh-pre-header',
  styleUrl: 's-abdullakh-pre-header.css',
  shadow: false,
})
export class SAbdullakhPreHeader implements ComponentInterface {
  @Event() close: EventEmitter;

  render() {
    console.log(this.close)
    return (
      <div class="container-fluid cookes_main_block_bckrnd">
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
              <button class="manage_cookes_btn" onClick={() => {this.close.emit()}}>
                Manage Cookies
              </button>
              <button class="accent_cookes_btn" onClick={() => {this.close.emit()}}>
                Accept
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

}
