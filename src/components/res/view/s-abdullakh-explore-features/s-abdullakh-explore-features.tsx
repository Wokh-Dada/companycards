import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-explore-features',
  styleUrl: 's-abdullakh-explore-features.css',
  shadow: false,
})
export class SAbdullakhExploreFeatures implements ComponentInterface {
  @Prop() exploreFeatures: any;

  render() {
    return (
      <div class="container">
        <div class="explore_features_title">
          <h3>
            {this.exploreFeatures.title}
          </h3>
        </div>
        <div class="row">
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
