import {Component, h} from '@stencil/core';
import {exploreFeatures, headNav, otherFeatures, previewBackground} from "../../utils/mock";


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  preHeader = false;
  public close(){

    this.preHeader = true;
  }

  render() {
    return (
      <div class="m-0 p-0">
        <div class="topThreeBlocks">
          {this.preHeader ? '': <pre-header onClose={() => this.close()}/>}
          <s-abdullakh-header headNav={headNav}/>
          <product-presentation/>
        </div>
        <multi-currency-slaider/>
        <personal-security />
        <expense-management/>
        <clause-match/>
        <security-control/>
        <s-abdullakh-card-design/>
        <other-features featuresblock={otherFeatures.featuresblock}/>
        <explore-features exploreFeatures={exploreFeatures.exploreFeaturesblock}/>
        <link-block/>
        <icons-block previewBackground={previewBackground.previewBackgroundBlock}/>
        <footer-block/>
      </div>
    );
  }
}
