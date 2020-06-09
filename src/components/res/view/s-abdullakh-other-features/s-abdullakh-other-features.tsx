import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-other-features',
  styleUrl: 's-abdullakh-other-features.css',
  shadow: false,
})
export class SAbdullakhOtherFeatures implements ComponentInterface {
  @Prop() otherFeatures: any;

  @Prop() featuresblock: any;

  /**
   * клик по в компоненте NewSinglePost
   * */
  @Event() clickOnOtherFeatures: EventEmitter;

  render() {
    console.log(this.otherFeatures)
    return (
      <div class="container">
        <div class="other_features_title">
          <h2 onClick={() => this.clickOnOtherFeatures.emit(this.featuresblock.title)}>
            {this.otherFeatures.title}
          </h2>
        </div>
        <div class="row mt-5" onClick={() => this.clickOnOtherFeatures.emit(this.featuresblock)}>
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
