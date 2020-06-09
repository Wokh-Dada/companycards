import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-personal-security',
  styleUrl: 's-abdullakh-personal-security.css',
  shadow: false,
})
export class SAbdullakhPersonalSecurity implements ComponentInterface {
  /**
   * путь к img personalSecurity
   * */
  @Prop() personalSecurityImg: string;

  /**
   * массив personalSecurity
   * */
  @Prop() personalSecurity: any;

  @Event() clickOnPersonalSecurity: EventEmitter;

  render() {
    return (
      <div class="container persional_security">
        <div class="row persional_security_block">
          <div class="col-lg-5 mt-5">
            <div
              class="persional_security_right d-lg-none d-block"
              style={{backgroundImage: "url(" + this.personalSecurityImg + ")"}}
              onClick={() => this.clickOnPersonalSecurity.emit(this.personalSecurityImg)}
            >
            </div>
            <div class="persional_security_list_block">
              <div class="list_block">
                <div class="list_block_title" onClick={() => this.clickOnPersonalSecurity.emit(this.personalSecurity.title)}>
                  <h3>
                    {this.personalSecurity.title}
                  </h3>
                </div>
                <ul class="list_block_info_blocks" onClick={() => this.clickOnPersonalSecurity.emit(this.personalSecurity.list)}>
                  <ListBlock arr={this.personalSecurity.list}/>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-7 d-none d-lg-block">
            <div class="persional_security_right">
              <div style={{backgroundImage: "url(" + this.personalSecurityImg + ")"}} >
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

