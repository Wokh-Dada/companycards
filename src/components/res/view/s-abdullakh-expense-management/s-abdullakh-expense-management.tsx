import {Component, ComponentInterface, h} from '@stencil/core';
import {expenseManagement} from "../../../../utils/mock";

@Component({
  tag: 's-abdullakh-expense-management',
  styleUrl: 's-abdullakh-expense-management.css',
  shadow: false,
})
export class SAbdullakhExpenseManagement implements ComponentInterface {

  render() {
    return (
      <div class="container expense_management">
        <div class="row expense_management_block">
          <div class="col-lg-7 d-none d-lg-block">
            <div class="expense_management_left">
              <div class="expense_management_bckgrnd">
              </div>
            </div>
          </div>
          <div class="col-lg-5 mt-3">
            <div class="expense_management_left d-block d-lg-none">
              <div class="expense_management_bckgrnd">
              </div>
            </div>
            <div class="expense_management_list_block">
              <s-abdullakh-list-block text={expenseManagement.list.text} titl={expenseManagement.list.title}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
