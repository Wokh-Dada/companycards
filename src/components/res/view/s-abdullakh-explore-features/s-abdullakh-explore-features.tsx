import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-explore-features',
  styleUrl: 's-abdullakh-explore-features.css',
  shadow: false,
})
export class SAbdullakhExploreFeatures implements ComponentInterface {
  @Prop() exploreFeatures: any[];

  render() {

    let blocks = this.exploreFeatures.map((item) => {
      return (
        <div class="col-lg-4 col-12">
          <div class="explore_features_position">
          <div class="explore_features_block">
            <div class={this.bckgrndClass(item.class)}>
               <span class="material-icons">
                 {item.icon}
                </span>
            </div>
            <div class="explore_features_block_title">
              <h4>
                {item.title}
              </h4>
            </div>
            <div class="explore_features_block_content">
              {item.text}
            </div>
          </div>
          </div>
        </div>
      );
    })

    return (
      <div class="container">
        <div class="explore_features_title">
          <h3>
            Explore our other features
          </h3>
        </div>
        <div class="row">
          {blocks}
        </div>
      </div>
    );
  }

  public bckgrndClass(x) {
    switch (x) {
      case 'Pink':
        return 'explore_features_block_icon_pink';

      case 'Gray':
        return 'explore_features_block_icon_gray';

      case 'Orange':
        return 'explore_features_block_icon_orange';
    }
  }

}
