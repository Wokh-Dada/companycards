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
          {this.preHeader ? '': <s-abdullakh-pre-header onClose={() => this.close()}/>}
          <s-abdullakh-header headNav={headNav}/>
          <s-abdullakh-product-presentation/>
        </div>
        <s-abdullakh-multi-currency-slaider/>
        <s-abdullakh-personal-security />
        <s-abdullakh-expense-management/>
        <s-abdullakh-clause-match/>
        <s-abdullakh-security-control/>
        <s-abdullakh-card-design/>
        <s-abdullakh-other-features featuresblock={otherFeatures.featuresblock}/>
        <s-abdullakh-explore-features exploreFeatures={exploreFeatures.exploreFeaturesblock}/>
        <s-abdullakh-link-block/>
        <s-abdullakh-icons-block previewBackground={previewBackground.previewBackgroundBlock}/>
        <s-abdullakh-footer-block/>
      </div>
    );
  }
}
