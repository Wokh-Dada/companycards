import {Component, h} from '@stencil/core';
import {
  cardDesign,
  clauseMatch,
  expenseManagement,
  exploreFeatures,
  headNav, linkBlock,
  otherFeatures, personalSecurity,
  previewBackground,
  productPresentation, securityControl
} from "../../utils/mock";


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  preHeader = true;

  public close() {
    this.preHeader = !true;
  }

  render() {
    return (
      <div class="m-0 p-0">
        <div class="topThreeBlocks">
          {this.preHeader ? <s-abdullakh-pre-header onClose={() => this.close()}/> : ''}
          <s-abdullakh-header headNav={headNav}/>
          <s-abdullakh-product-presentation
            productPresentation={productPresentation}
            onClickOnProductPresentation={(event) => this.clickOnProductPresentation(event)}
          />
        </div>
        <s-abdullakh-multi-currency-slaider
        />
        <s-abdullakh-personal-security
          personalSecurityImg={personalSecurity.personalSecurityImg}
          personalSecurity={personalSecurity}
        />
        <s-abdullakh-expense-management
          expenseManagement={expenseManagement}
          expenseManagementImg={expenseManagement.expenseManagementImg}
        />
        <s-abdullakh-clause-match
          clauseMatch={clauseMatch}
        />
        <s-abdullakh-security-control
          securityControl={securityControl}
          securityControlImg={securityControl.securityControlImg}
        />
        <s-abdullakh-card-design
          cardDesign={cardDesign}
        />
        <s-abdullakh-other-features
          featuresblock={otherFeatures.featuresblock}
        />
        <s-abdullakh-explore-features
          exploreFeatures={exploreFeatures}
        />
        <s-abdullakh-link-block
          linkBlock={linkBlock}
        />
        <s-abdullakh-icons-block
          previewBackground={previewBackground.previewBackgroundBlock}
        />
        <s-abdullakh-footer-block/>
      </div>
    );
  }

  /**
   * клик по элементам ProductPresentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log('ProductPresentation:', detail)
  }

  /**
   * клик по элементам меню
   */
  public personalSecurity({detail}) {
    return console.log('personalSecurity:',  detail)
  }

}

