import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation-content',
  styleUrl: 's-abdullakh-product-presentation-content.css',
  shadow: false,
})
export class SAbdullakhProductPresentationContent implements ComponentInterface {
  /**
   * массив элементов product-presentation-conten
   * */
  @Prop() arr: any;

  /**
   * массив элементов product-presentation-conten
   * */
  @Prop() videoScr: string;

  /**
   * клик по элементам ProductPresentation
   */
  @Event() clickOnProductPresentation: EventEmitter;

  render() {
    console.log(this.videoScr)
    return (
      <div class="presentation_left_block">
        <div class="in_presentation_left_block">
          <div class="presentation_left_block_title"
               onClick={() => this.clickOnProductPresentation.emit(this.arr.title)}
          >
            <h1>
              {this.arr.title}
            </h1>
          </div>
          <div class="presentation_right_block d-lg-none d-flex video_center"
               onClick={() => this.clickOnProductPresentation.emit(this.videoScr)}
          >
            <div class="presentation_right_block_video">
              <video src={this.videoScr}
                     autoplay="autoplay"
                     playsinline="" data-testid="video-media">
                <track kind="captions"/>
                <source type="video/mp4"/>
              </video>
            </div>
          </div>
          <div class="presentation_left_block_subtitle"
               onClick={() => this.clickOnProductPresentation.emit(this.arr.subtitle)}
          >
            {this.arr.subtitle}
          </div>
          <div class="presentation_left_block_btn">
            <button class="my_btn presentation_btn"
                    onClick={() => this.clickOnProductPresentation.emit(this.arr.btnText)}
            >
              {this.arr.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}


