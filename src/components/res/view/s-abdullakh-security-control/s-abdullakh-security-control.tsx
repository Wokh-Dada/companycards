import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-security-control',
  styleUrl: 's-abdullakh-security-control.css',
  shadow: false,
})
export class SAbdullakhSecurityControl implements ComponentInterface {
  /**
   * массив personalSecurity
   * */
  @Prop() securityControlImg: string;

  /**
   * массив personalSecurity
   * */
  @Prop() securityControl: any;

  render() {
    return (
      <div class="container security_control">
        <div class="row security_control_block">
          <div class="col-lg-7 d-none d-lg-block">
            <div class="security_control_left">
              <div class="security_control_bckgrnd">
              </div>
            </div>
          </div>
          <div class="col-lg-5 mt-5">
            <div class="security_control_left d-block d-lg-none">
              <div
                class="security_control_bckgrnd"
                style={{backgroundImage: "url(" + this.securityControlImg + ")"}}
              >
              </div>
            </div>
            <div class="security_control_list_block">
              <div class="list_block">
                <div class="list_block_title">
                  <h3>
                    {this.securityControl.title}
                  </h3>
                </div>
                <ul class="list_block_info_blocks">
                  <ListBlock arr={this.securityControl.list} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const ListBlock = (props) => {
  return props.arr.text.map((item) => {
    return (
      <s-abdullakh-list-block arr={item}/>
    );
  })
}
