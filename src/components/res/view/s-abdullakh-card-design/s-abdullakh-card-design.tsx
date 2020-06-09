import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-card-design',
  styleUrl: 's-abdullakh-card-design.css',
  shadow: false,
})
export class SAbdullakhCardDesign implements ComponentInterface {
  @Prop()cardDesign: any;

  @Event() clickOnCardDesign: EventEmitter;

  card: HTMLElement;

  render() {
    return (
      <div class="container">
        <div class="card_design_block">
          <div class="card_design_block_title">
            <h2 onClick={() => this.clickOnCardDesign.emit(this.cardDesign.title)}>
              {this.cardDesign.title}
            </h2>
            <div class="card_design_block_subtitle" onClick={() => this.clickOnCardDesign.emit(this.cardDesign.subtitle)}>
              {this.cardDesign.subtitle}
            </div>
          </div>
          <div class="card_design_block_card_img" onClick={() => this.clickOnCardDesign.emit(event)}>
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

  public blackCardtoggle(){
    this.card.id = 'black_card'
  }

  public whiteCardtoggle(){
    this.card.id = 'white_card'
  }
}
