import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-other-features',
  styleUrl: 's-abdullakh-other-features.css',
  shadow: false,
})
export class SAbdullakhOtherFeatures implements ComponentInterface {
  @Prop() featuresblock: any;

  render() {
    return (
      <div class="container">
        <div class="other_features_title">
          <h2>
            {this.featuresblock.title}
          </h2>
        </div>
        <div class="row mt-5">
          <Blocks arr={this.featuresblock}/>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const Blocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg-6 col-12">
        <s-abdullakh-other-features-blocks arr={item}/>
      </div>
    );
  })
}
