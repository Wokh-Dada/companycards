import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-other-features-blocks',
  styleUrl: 's-abdullakh-other-features-blocks.css',
  shadow: false,
})
export class SAbdullakhOtherFeaturesBlocks implements ComponentInterface {
  @Prop() arr: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnOtherFeatures: EventEmitter;

  render() {
    return (
        <div class={this.arr.class}>
          <div class="other_features_blocks">
            <div class="other_features_blocks_title">
              <h3 onClick={() => this.clickOnOtherFeatures.emit(this.arr.title)}>
                {this.arr.title}
              </h3>
            </div>
            <div class="other_features_content" onClick={() => this.clickOnOtherFeatures.emit(this.arr.text)}>
              {this.arr.text}
            </div>
          </div>
        </div>
    );
  }
}
