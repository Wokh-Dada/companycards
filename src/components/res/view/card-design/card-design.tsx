import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 'card-design',
  styleUrl: 'card-design.css',
  shadow: false,
})
export class CardDesign implements ComponentInterface {
  card: HTMLElement;

  public blackCardtoggle(){
    this.card.id = 'black_card'
  }

  public whiteCardtoggle(){
    this.card.id = 'white_card'
  }

  render() {
    return (
      <div class="container">
        <div class="card_design_block">
          <div class="card_design_block_title">
            <h2>
              Exclusive business card designs
            </h2>
            <div class="card_design_block_subtitle">
              Choose from our exclusive business card designs.
            </div>
          </div>
          <div class="card_design_block_card_img">
            <div class="card_img" id="black_card" ref={(el) => {this.card = el}}>
            </div>
          </div>
          <div class="card_btn_block">
            <div class="black_card_btn_border">
              <div class="black_card_btn" onClick={() => this.blackCardtoggle()}>
              </div>
            </div>
            <div class="gray_card_btn_border" onClick={() => this.whiteCardtoggle()}>
              <div class="gray_card_btn">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
