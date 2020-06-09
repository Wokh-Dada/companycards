import {Component, h} from '@stencil/core';
import {
  cardDesign,
  clauseMatch,
  expenseManagement,
  exploreFeatures,
  headNav, headText, linkBlock,
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
  render() {
    return (
      <div class="m-0 p-0">
        <div class="topThreeBlocks">
          <s-abdullakh-pre-header />
          <s-abdullakh-header
            headText={headText}
            headNav={headNav}
            onClickOnHeader={(event) => this.clickOnHeader(event)}
          />
          <s-abdullakh-product-presentation
            productPresentation={productPresentation}
            onClickOnProductPresentation={(event) => this.clickOnProductPresentation(event)}
          />
        </div>
        <s-abdullakh-multi-currency-slaider/>
        <s-abdullakh-personal-security
          personalSecurityImg={personalSecurity.personalSecurityImg}
          personalSecurity={personalSecurity}
          onClickOnPersonalSecurity={(event) => this.clickOnPersonalSecurity(event)}
        />
        <s-abdullakh-expense-management
          expenseManagement={expenseManagement}
          expenseManagementImg={expenseManagement.expenseManagementImg}
          onClickOnExpenseManagement={(event) => this.clickOnExpenseManagement(event)}
        />
        <s-abdullakh-clause-match
          clauseMatch={clauseMatch}
          onClickOnClauseMatch={(event) => this.clickOnClauseMatch(event)}
        />
        <s-abdullakh-security-control
          securityControl={securityControl}
          securityControlImg={securityControl.securityControlImg}
          onClickOnSecurityControl={(event) => this.clickOnSecurityControl(event)}
        />
        <s-abdullakh-card-design
          cardDesign={cardDesign}
          onClickOnCardDesign={(event) => this.clickOnCardDesign(event)}
        />
        <s-abdullakh-other-features
          otherFeatures={otherFeatures}
          featuresblock={otherFeatures.featuresblock}
          onClickOnOtherFeatures={(event) => this.clickOnOtherFeatures(event)}
        />
        <s-abdullakh-explore-features
          exploreFeatures={exploreFeatures}
          onClickOnExploreFeature={(event) => this.clickOnExploreFeature(event)}
        />
        <s-abdullakh-link-block
          linkBlock={linkBlock}
          onClickOnLinkBlock={(event) => this.clickOnLinkBlock(event)}
        />
        <s-abdullakh-icons-block
          previewBackground={previewBackground.previewBackgroundBlock}
          onClickOnIconsBlock={(event) => this.clickOnIconsBlock(event)}
        />
        <s-abdullakh-footer-block/>
      </div>
    );
  }

  /**
   * клик по элементам clickOnHeader
   */
  public clickOnHeader({detail}) {
    return console.log('clickOnHeader:', detail)
  }

  /**
   * клик по элементам ProductPresentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log('ProductPresentation:', detail)
  }

  /**
   * клик по элементам personalSecurity
   */
  public clickOnPersonalSecurity({detail}) {
    return console.log('personalSecurity:',  detail)
  }

  /**
   * клик по элементам ExpenseManagement
   */
  public clickOnExpenseManagement({detail}) {
    return console.log('ExpenseManagement:',  detail)
  }

  /**
   * клик по элементам ClauseMatch
   */
  public clickOnClauseMatch({detail}) {
    return console.log('ClauseMatch:',  detail)
  }

  /**
   * клик по элементам SecurityControl
   */
  public clickOnSecurityControl({detail}) {
    return console.log('SecurityControl:',  detail)
  }

  /**
   * клик по элементам CardDesign
   */
  public clickOnCardDesign({detail}) {
    return console.log('CardDesign:',  detail)
  }

  /**
   * клик по элементам OtherFeatures
   */
  public clickOnOtherFeatures({detail}) {
    return console.log('OtherFeatures:',  detail)
  }

  /**
   * клик по элементам ExploreFeature
   */
  public clickOnExploreFeature({detail}) {
    return console.log('ExploreFeature:',  detail)
  }

  /**
   * клик по элементам LinkBlock
   */
  public clickOnLinkBlock({detail}) {
    return console.log('LinkBlock:',  detail)
  }

  /**
   * клик по элементам clickOnIconsBlock
   */
  public clickOnIconsBlock({detail}) {
    return console.log('clickOnIconsBlock:',  detail)
  }
}

