import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation',
  styleUrl: 's-abdullakh-product-presentation.css',
  shadow: false,
})
export class SAbdullakhProductPresentation implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="presentation_block">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="presentation_left_block">
                <div class="in_presentation_left_block">
                  <div class="presentation_left_block_title">
                    <h1>
                      Radically better company cards
                    </h1>
                  </div>
                  <div class="presentation_right_block d-lg-none d-flex video_center">
                    <div class="presentation_right_block_video">
                      <video src="https://assets.revolut.com/media/business/corporate-cards/hero_slider.mp4"
                             autoplay="autoplay"
                             playsinline="" data-testid="video-media">
                        <track kind="captions"/>
                        <source type="video/mp4"/>
                      </video>
                    </div>
                  </div>
                  <div class="presentation_left_block_subtitle">
                    No-fuss company cards for team members, instant virtual cards for security and flexibility — all set
                    up
                    with our easy expense management
                  </div>
                  <div class="presentation_left_block_btn">
                    <button class="my_btn presentation_btn">
                      Start for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <div class="presentation_right_block">
                <div class="presentation_right_block_video">
                  <video src="https://assets.revolut.com/media/business/corporate-cards/hero_slider.mp4"
                         autoplay="autoplay"
                         playsinline="" data-testid="video-media">
                    <track kind="captions"/>
                    <source type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
