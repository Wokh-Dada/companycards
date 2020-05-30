import { Component, ComponentInterface, h } from '@stencil/core';
import {securityControl} from "../../../../utils/mock";

@Component({
  tag: 'security-control',
  styleUrl: 'security-control.css',
  shadow: false,
})
export class SecurityControl implements ComponentInterface {

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
              <div class="security_control_bckgrnd">
              </div>
            </div>
            <div class="security_control_list_block">
              <list-block text={securityControl.list.text} titl={securityControl.list.title}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
