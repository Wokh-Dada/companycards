import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-other-features-blocks',
  styleUrl: 's-abdullakh-other-features-blocks.css',
  shadow: false,
})
export class SAbdullakhOtherFeaturesBlocks implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
        <div class={this.arr.class}>
          <div class="other_features_blocks">
            <div class="other_features_blocks_title">
              <h3>
                {this.arr.title}
              </h3>
            </div>
            <div class="other_features_content">
              {this.arr.text}
            </div>
          </div>
        </div>
    );
  }
}
