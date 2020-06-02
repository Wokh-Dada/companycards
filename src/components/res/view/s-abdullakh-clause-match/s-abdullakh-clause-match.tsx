import {Component, ComponentInterface, h} from '@stencil/core';


@Component({
  tag: 's-abdullakh-clause-match',
  styleUrl: 's-abdullakh-clause-match.css',
  shadow: false,
})
export class SAbdullakhClauseMatch implements ComponentInterface {

  render() {
    return (
      <div class="container clause_match">
        <div class="row clause_match_block">
          <div class="col-lg-7 mt-5">
            <div class="clause_match_right_block d-block d-lg-none">
            </div>
            <div class="clause_match_block_contest">
              <div class="block_name">
                clausematch
              </div>
              <blockquote class="">
                <div class="clause_match_block_left_block">
                  <svg class="" width="48" height="38" viewBox="0 0 48 38"
                       fill="none">
                    <path
                      d="M22.8043 26.1533C22.8043 29.1495 21.7148 31.7372 19.5357 33.9163C17.4474 36.0046 14.8597 37.0487 11.7727 37.0487C8.77643 37.0487 6.18877 36.0046 4.00968 33.9163C1.83059 31.7372 0.559459 29.3311 0.196278 26.6981C-0.439289 21.7951 0.468664 16.9376 2.92014 12.1254C5.37161 7.22248 8.91263 3.49987 13.5432 0.957607C16.1763 -0.404323 18.2645 -0.313528 19.8081 1.22999C21.4424 2.68272 20.9884 4.36243 18.4461 6.26913C17.175 7.35868 16.0855 8.67521 15.1775 10.2187C14.2695 11.6715 13.634 13.2604 13.2708 14.9855C13.18 15.7118 13.5432 16.075 14.3603 16.075C16.1763 16.1658 18.0376 17.1646 19.9443 19.0713C21.851 20.978 22.8043 23.3386 22.8043 26.1533ZM48 26.1533C48 29.1495 46.9105 31.7372 44.7314 33.9163C42.6431 36.0046 40.1008 37.0487 37.1046 37.0487C34.1083 37.0487 31.5207 36.0046 29.3416 33.9163C27.1625 31.7372 25.8913 29.3311 25.5282 26.6981C24.8018 21.7951 25.6644 16.9376 28.1158 12.1254C30.6581 7.22248 34.2445 3.49987 38.8751 0.957607C41.4173 -0.404323 43.4602 -0.313528 45.0038 1.22999C46.6381 2.68272 46.2295 4.36243 43.778 6.26913C42.4161 7.35868 41.2812 8.67521 40.3732 10.2187C39.4652 11.6715 38.8751 13.2604 38.6027 14.9855C38.5119 15.7118 38.8297 16.075 39.556 16.075C41.3719 16.1658 43.2332 17.1646 45.1399 19.0713C47.0466 20.978 48 23.3386 48 26.1533Z"
                      fill="currentColor"/>
                  </svg>
                  <h3 class="">
                    At ClauseMatch we’ve had a positive experience
                    using Revolut Business.
                  </h3>
                  <div data-testid="test-quote" class="clause_match_left_block_text">
                    The possibility to track
                    and manage employee expenses on a single dashboard makes it a very convenient tool for business use.
                  </div>
                  <div class="clause_match_left_block_author">
                    <span class="">
                      Andrey Dokuchaev
                    </span>,
                      COO &amp; Co-Founder
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="clause_match_right_block">
            </div>
          </div>
        </div>
      </div>
    );
  }

}
