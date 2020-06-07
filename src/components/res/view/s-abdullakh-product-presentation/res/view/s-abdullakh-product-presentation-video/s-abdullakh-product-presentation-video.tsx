import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation-video',
  styleUrl: 's-abdullakh-product-presentation-video.css',
  shadow: false,
})
export class SAbdullakhProductPresentationVideo implements ComponentInterface {
  /**
   * массив элементов productPresentation
   * */
  @Prop() videoScr: any;

  /**
   * клик по элементам ProductPresentation
   */
  @Event() clickOnProductPresentation: EventEmitter;

  render() {
    return (
      <div class="presentation_right_block">
        <div class="presentation_right_block_video">
          <video
            src={this.videoScr}
            autoplay="autoplay"
            playsinline=""
            data-testid="video-media"
            onClick={() => this.clickOnProductPresentation.emit(this.videoScr)}
          >
            <track kind="captions"/>
            <source type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}


