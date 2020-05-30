import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'other-features',
  styleUrl: 'other-features.css',
  shadow: false,
})
export class OtherFeatures implements ComponentInterface {
  @Prop() featuresblock: any[];

  render() {
    let blocks = this.featuresblock.map((item) => {
      return (
        <div class="col-lg-6 col-12">
          <div class={item.class}>
            <div class="other_features_blocks">
              <div class="other_features_blocks_title">
                <h3>
                  {item.title}
                </h3>
              </div>
              <div class="other_features_content">
                {item.text}
              </div>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div class="container">
        <div class="other_features_title">
          <h2>
            Other features coming soon
          </h2>
        </div>
        <div class="row mt-5">
          {blocks}
        </div>
      </div>
    );
  }

}
