import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-expense-management',
  styleUrl: 's-abdullakh-expense-management.css',
  shadow: false,
})
export class SAbdullakhExpenseManagement implements ComponentInterface {
  /**
   * массив personalSecurity
   * */
  @Prop() expenseManagementImg: string;

  /**
   * массив personalSecurity
   * */
  @Prop() expenseManagement: any;

  render() {
    return (
      <div class="container expense_management">
        <div class="row expense_management_block">
          <div class="col-lg-7 d-none d-lg-block">
            <div class="expense_management_left">
              <div
                class="expense_management_bckgrnd"
                style={{backgroundImage: "url(" + this.expenseManagementImg + ")"}}
              >
              </div>
            </div>
          </div>
          <div class="col-lg-5 mt-3">
            <div class="expense_management_left d-block d-lg-none">
              <div
                class="expense_management_bckgrnd"
                style={{backgroundImage: "url(" + this.expenseManagementImg + ")"}}
              >
              </div>
            </div>
            <div class="expense_management_list_block">
              <div class="list_block">
                <div class="list_block_title">
                  <h3>
                    {this.expenseManagement.title}
                  </h3>
                </div>
                <ul class="list_block_info_blocks">
                  <ListBlock arr={this.expenseManagement.list} />
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

