import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-explore-features',
  styleUrl: 's-abdullakh-explore-features.css',
  shadow: false,
})
export class SAbdullakhExploreFeatures implements ComponentInterface {
  @Prop() exploreFeatures: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnExploreFeature: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="explore_features_title">
          <h3 onClick={() => this.clickOnExploreFeature.emit(this.exploreFeatures.title)}>
            {this.exploreFeatures.title}
          </h3>
        </div>
        <div class="row" onClick={() => this.clickOnExploreFeature.emit(this.exploreFeatures)}>
          <Block arr={this.exploreFeatures}/>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const Block = (props) => {
  return props.arr.exploreFeaturesblock.map((item) => {
    return (
      <div class="col-lg-4 col-12">
        <s-abdullakh-explore-features-blocks arr={item}/>
      </div>
    );
  })
}
