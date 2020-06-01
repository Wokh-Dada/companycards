import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {personalSecurity} from "../../../../utils/mock";

@Component({
  tag: 'personal-security',
  styleUrl: 'personal-security.css',
  shadow: false,
})
export class ListBlock implements ComponentInterface {
  @Prop() personalSecurity: any[];

  render() {
    return (
      <div class="container persional_security">
        <div class="row persional_security_block">
          <div class="col-lg-5 mt-5">
            <div class="persional_security_right d-lg-none d-block">
              <list-block-bckgrnd/>
            </div>
            <div class="persional_security_list_block">
              <list-block text={personalSecurity.list.text} titl={personalSecurity.list.title}/>
            </div>
          </div>
          <div class="col-lg-7 d-none d-lg-block">
            <div class="persional_security_right">
              <list-block-bckgrnd/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
