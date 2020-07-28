import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';


@Component({
  tag: 's-abdullakh-clause-match',
  styleUrl: 's-abdullakh-clause-match.css',
  shadow: false,
})
export class SAbdullakhClauseMatch implements ComponentInterface {

  @Prop()clauseMatch: any;

  @Event() clickOnClauseMatch: EventEmitter;

  render() {
    return (
      <div class="container clause_match">
        <div class="row clause_match_block">
          <div class="col-lg-7 mt-5">
            <div
              class="clause_match_right_block d-block d-lg-none"
              style={{backgroundImage: "url(" + this.clauseMatch.clauseMatchImg + ")"}}
              onClick={() => this.clickOnClauseMatch.emit(this.clauseMatch.clauseMatchImg)}
            >
            </div>
            <s-abdullakh-clause-match-content clauseMatch={this.clauseMatch} />
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div
              class="clause_match_right_block"
              style={{backgroundImage: "url(" + this.clauseMatch.clauseMatchImg + ")"}}
              onClick={() => this.clickOnClauseMatch.emit(this.clauseMatch.clauseMatchImg)}
            >
            </div>
          </div>
        </div>
      </div>
    );
  }
}
