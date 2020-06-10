import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-explore-features-blocks',
  styleUrl: 's-abdullakh-explore-features-blocks.css',
  shadow: false,
})
export class SAbdullakhExploreFeaturesBlocks implements ComponentInterface {
  @Prop() arr: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnExploreFeature: EventEmitter;

  render() {
    return (
      <div class="explore_features_position">
        <div class="explore_features_block">
          <div class={this.bckgrndClass(this.arr.class)}>
            <span class="material-icons" onClick={() => this.clickOnExploreFeature.emit(this.arr.icon)}>
              {this.arr.icon}
            </span>
          </div>
          <div class="explore_features_block_title">
            <h4 onClick={() => this.clickOnExploreFeature.emit(this.arr.title)}>
              {this.arr.title}
            </h4>
          </div>
          <div class="explore_features_block_content" onClick={() => this.clickOnExploreFeature.emit(this.arr.text)}>
            {this.arr.text}
          </div>
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
