import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-footer',
  styleUrl: 's-abdullakh-footer.css',
  shadow: false,
})
export class SAbdullakhFooter implements ComponentInterface {
  @Prop() footer: any[];

  render() {
    return (
      <footer class="container-fluid">
        <div class="container">
          <div class="row footer_block">
            <FooterLogoBlocks arr={this.footer}/>
            <FooterItemBlocks arr={this.footer}/>
          </div>
          <div class="copyright_block">
            <div class="copyright_flag_options">
              <div class="copyright_flag">

              </div>
              <div class="copyright_options">
                United Kingdom
              </div>
              <form>
                <p>
                  <select>
                    <input type="search"/>
                    <option>English</option>
                    <option>Francais Гена</option>
                    <option>Polski</option>
                    <option>Deutsch</option>
                  </select>
                </p>
              </form>
            </div>
            <div class="footerStatusory">
              <p>
                <span class="footerStatusoryLTD">
                  © 2020 Revolut Ltd
                </span>
                <span class="footerCopyrightMenu">
                <a href="#">
                  Website Terms
                </a>
                <a href="#">
                  Legal Agreements
                </a>
                <a href="#">
                  Privacy Policy
                </a>
                <a href="#">
                  Complaints
                </a>
                <a href="#">
                  Data Privacy For Candidates
                </a>
                <a href="#">
                  Responsible Disclosure Program Policy
                </a>
                <a href="#">
                  UK Modern Slavery Statement
                </a>
                </span>
              </p>
              <div class="copyright_bottom_text">
                <p>
                  If you would like to find out more about which Revolut entity you receive services from, or if you have
                  any other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Ltd (No.
                  08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011
                  (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD.
                  Insurance related-products are provided by Revolut Travel Ltd which is authorised by the Financial
                  Conduct Authority to undertake insurance distribution activities (FCA No: 780586) and by Revolut Ltd, an
                  Appointed Representative of Revolut Travel Ltd in relation to insurance distribution activities. Revolut
                  Ltd is an Appointed Representative of Lending Works Ltd for the activity of “operating an electronic
                  system for lending”. Trading and investment products are provided by Revolut Trading Ltd (No. 832790) is
                  wholly owned subsidiary of Revolut Ltd and is an appointed representative of Sapia Partners LLP which is
                  authorised and regulated by the Financial Conduct Authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterLogoBlocks = (props) => {
  return props.arr.slice(0, 1).map((item) => {
    return (
      <div>
        <s-abdullakh-footer-logo-blocks arr={item}/>
      </div>
    );
  })
}

/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemBlocks = (props) => {
  return props.arr.slice(1, 6).map((item) => {
    return (
      <div>
        <s-abdullakh-footer-menu-blocks arr={item}/>
      </div>

    );
  })
}
