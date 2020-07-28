import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation',
  styleUrl: 's-abdullakh-product-presentation.css',
  shadow: false,
})
export class SAbdullakhProductPresentation implements ComponentInterface {
  /**
   * массив элементов productPresentation
   * */
  @Prop() productPresentation: any;

  /**
   * клик по элементам ProductPresentation
   */
  @Event() clickOnProductPresentation: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="presentation_block">
          <div class="row">
            <div class="col-lg-6 col-12">
              <ProductPresentationContent arr={this.productPresentation} />
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <s-abdullakh-product-presentation-video videoScr={this.productPresentation.videoScr}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const ProductPresentationContent = (props) => {
  return props.arr.productPresentationContent.map((item) => {
    return (
      <s-abdullakh-product-presentation-content videoScr={props.arr.videoScr} arr={item} />
    );
  })
}
