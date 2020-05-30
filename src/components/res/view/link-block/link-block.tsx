import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'link-block',
  styleUrl: 'link-block.css',
  shadow: false,
})
export class LinkBlock implements ComponentInterface {

  render() {
    return (
      <div class="container link_block">
        <div class="link_block_title">
          <h2>
            Try Revolut Business
          </h2>
        </div>
        <div class="link_block_subtitle">
          Sign up in minutes, cancel anytime.
        </div>
        <div class="link_block_btn">
          <button>
            Start for free
          </button>
        </div>
      </div>
    );
  }

}