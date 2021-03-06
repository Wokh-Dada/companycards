import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header',
  styleUrl: 's-abdullakh-header.css',
  shadow: false,
})
export class SAbdullakhHeader implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() headText: any;

  /**
   * массив меню
   * */
  @Prop() headNav: any[];

  /**
   * массив меню
   * */
  @Event() clickOnHeader: EventEmitter;

  /**
   * переменная для observe функции скрола
   * */
  observer: IntersectionObserver;

  /**
   * ref для подключения k блоку
   * */
  headerFix: HTMLElement;

  /**
   * ref для подключения к родительскому блоку картинки
   * */
  headerFixParent: HTMLElement;

  render() {

    return (
      <header class="container-fluid" ref={(el) => this.headerFixParent = el}>
        <div class="header_innner" ref={(el) => this.headerFix = el}>
          <div class="container">
            <div class="row main__menu px-0 mx-0">
              <div class="col-auto pr-0 mr-0">
                <div class="logo" onClick={() => this.clickOnHeader.emit(event)}>
                  <a class="navbar-brand">
                    <svg width="inherit"
                         height="inherit"
                         viewBox="0 0 687.78668 302.62668"
                         preserveAspectRatio="xMidYMid meet"
                         xmlns="http://www.w3.org/2000/svg"
                         data-testid="logo-svg"
                         class="styles__StyledSvg-a7znz5-1 ccHFrG">
                      <g transform="matrix(1.3333333,0,0,-1.3333333,0,302.62667)" id="g10">
                        <g transform="scale(0.1)" id="g12">
                          <path id="path14"
                                d="m 4373.83,1249.73 c -116.13,0 -210.22,93.99 -210.22,210.01 v 709.99 h 180.28 v -191.72 h 154.59 V 1832.3 h -154.59 v -361.01 c 0,-34.01 27.56,-61.54 61.76,-61.54 h 92.83 v -160.02 z m -3946.135,854.3 c 111.582,0 167.414,-44.27 167.414,-131.42 0,-87.13 -55.879,-131.4 -167.414,-131.4 H 188.859 v 262.82 z m 369.172,-834.32 -241.875,422.83 c 152.996,55.7 228.856,152.83 228.856,294.28 0.168,172.87 -137.293,282.89 -356.153,282.89 H 0 v -1000 h 188.859 v 405.71 h 160.293 l 231.707,-405.71 z m 367.563,591.42 c 101.56,0 168.88,-57.11 185.99,-148.57 H 969.875 c 27.254,84.28 101.545,148.57 194.555,148.57 z M 1516.45,1644 c 0,102.84 -32.89,187.11 -97.3,254.28 -64.4,67.15 -147.27,99.98 -248.88,99.98 -104.41,0 -193.168,-35.74 -266.157,-105.71 -71.582,-70.01 -107.277,-158.57 -107.277,-268.58 0,-110.03 35.742,-200.03 105.871,-270 71.59,-70.01 157.433,-104.29 258.973,-104.29 156.04,0 266.16,68.55 333.28,207.14 l -134.44,77.15 c -44.27,-87.13 -108.72,-130 -195.97,-130 -107.27,0 -183.132,68.57 -194.57,177.13 h 546.4 v 62.9 z m 551.36,334.28 -180.26,-480 -180.27,480 h -191.7 l 287.63,-708.58 h 168.88 l 287.6,708.58 z m 1819.69,0 v -391.13 c 0,-94.27 -51.11,-156.73 -148.2,-156.73 -98.72,0 -148.46,62.41 -148.46,156.73 v 391.13 h -180.52 v -421.15 c 0,-163.16 102.98,-307.4 328.98,-307.4 h 1.37 c 224.62,0 327.49,147.44 327.49,307.4 v 421.15 z m -581.91,-708.57 v 1000 h -180.28 v -1000 z m -802.68,204.27 c -40,38.56 -60.13,88.61 -60.13,149.99 0,61.44 19.97,111.42 60.13,148.57 39.99,38.55 87.34,57.12 142.97,57.12 55.75,0 104.36,-18.57 144.44,-57.12 41.47,-37.15 61.52,-87.13 61.52,-148.57 0,-61.43 -19.93,-111.43 -61.52,-149.99 -39.96,-37.14 -88.69,-55.7 -144.44,-55.7 -55.63,0 -102.85,18.56 -142.97,55.7 z m 416.32,424.3 c -75.91,67.15 -167.49,99.98 -273.35,99.98 -104.36,0 -195.92,-32.87 -271.83,-99.98 -75.86,-65.71 -114.4,-157.17 -114.4,-274.31 0,-117.16 38.54,-208.56 114.4,-275.71 75.84,-65.71 167.47,-98.58 271.83,-98.58 105.86,0 197.44,32.87 273.35,98.58 77.3,67.15 115.89,158.55 115.89,275.71 0,117.14 -38.59,208.6 -115.89,274.31"
                            // style="fill: rgb(13, 16, 18); fill-opacity: 1; fill-rule: nonzero; stroke: none;"
                          />
                          <path id="path16"
                                d="M 1317.67,721.801 V 289.199 c 0,-112.679 -50.27,-184.937 -174.52,-184.937 -124.25,0 -174.525,72.258 -174.525,184.937 V 721.801 H 851.379 V 269.781 C 851.379,107.109 970.059,0 1143.15,0 c 173.09,0 291.77,107.109 291.77,269.781 v 452.02 z M 3342,447.73 c 28.57,117.821 111.25,187.801 222.94,187.801 133.11,0 209.65,-93.109 218.65,-187.801 z m 560.41,-67.839 c 0,214.8 -126.38,356.468 -337.33,356.468 -194.8,0 -351.47,-153.097 -351.47,-368.179 C 3213.61,153.238 3370.28,0 3560.94,0 c 56.41,0 113.25,10 163.81,35.5586 46.56,23.5703 85.41,59.2695 115.96,101.2614 17.01,23.418 30.85,48.559 44.43,73.981 l -87.55,51.98 -3.86,-7.562 c -38.27,-76.41 -95.55,-154.387 -228.65,-154.387 -131.96,0 -222.65,94.398 -232.93,241.219 h 570.26 z M 2346.63,730.359 H 2229.39 V 19.7109 h 117.24 z m -115.84,95.551 c -15.85,15.281 -23.85,34.988 -23.85,59.41 0,24.418 8,44.129 23.85,58.84 15.86,15.281 34.57,22.559 56.56,22.559 22.13,0 41.27,-7.278 57.12,-22.559 16.43,-14.711 24.29,-34.422 24.29,-58.84 0,-24.422 -8,-44.129 -24.29,-59.41 -15.85,-14.711 -35.12,-22 -57.12,-22 -21.99,0 -40.7,7.289 -56.56,22 z M 1864.55,432.59 c -127.53,24.281 -179.52,58.269 -179.52,117.68 0,63.121 69.41,85.691 134.25,85.691 85.97,0 146.25,-40.563 178.94,-120.68 l 2.01,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.58,3.711 c -46.41,112.39 -137.96,169.378 -272.06,169.378 -120.25,0 -241.78,-65.41 -241.78,-190.519 0,-104.109 83.11,-177.231 234.07,-205.66 124.25,-23.129 172.52,-56.547 172.52,-119.098 0,-72.562 -56.69,-117.539 -148.1,-117.539 -90.4,0 -160.96,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.26,-55.563 -3.14,-1.988 1.28,-3.57 C 1586.35,76.1211 1697.46,0.289063 1834.56,0.289063 c 80.69,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0,109.109 -76.98,176.949 -235.51,207.078 z m 3058.3,0 c -127.53,24.281 -179.51,58.269 -179.51,117.68 0,63.121 69.41,85.691 134.24,85.691 85.98,0 146.25,-40.563 178.95,-120.68 l 2,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.57,3.711 c -46.41,112.39 -137.97,169.378 -272.07,169.378 -120.25,0 -241.78,-65.41 -241.78,-190.519 0,-104.109 83.12,-177.231 234.07,-205.66 124.26,-23.129 172.53,-56.547 172.53,-119.098 0,-72.562 -56.7,-117.539 -148.11,-117.539 -90.4,0 -160.95,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.25,-55.563 -3.15,-1.988 1.29,-3.57 C 4644.65,76.1211 4755.76,0.289063 4892.86,0.289063 c 80.7,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0,109.109 -76.98,176.949 -235.51,207.078 z m -617.24,0 c -127.54,24.281 -179.53,58.269 -179.53,117.68 0,63.121 69.42,85.691 134.25,85.691 85.98,0 146.24,-40.563 178.95,-120.68 l 2,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.57,3.711 c -46.42,112.39 -137.96,169.378 -272.06,169.378 -120.26,0 -241.94,-65.41 -241.94,-190.519 0,-104.109 83.12,-177.231 234.08,-205.66 124.25,-23.129 172.53,-56.547 172.53,-119.098 0,-72.562 -56.7,-117.539 -148.11,-117.539 -90.4,0 -160.96,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.26,-55.563 -3.14,-1.988 1.28,-3.57 C 4027.26,76.1211 4138.37,0.289063 4275.47,0.289063 c 80.69,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0.13,109.109 -76.84,176.949 -235.36,207.078 z M 2508.99,728.281 h 104.28 l 10,-114.293 h 5.72 c 38.57,74.293 112.86,127.141 225.71,127.141 161.43,0 255.72,-101.418 255.72,-268.57 V 19.7109 h -120 V 453.988 c 0,114.293 -52.86,180 -168.57,180 -121.43,0 -192.86,-85.718 -192.86,-232.859 V 19.7109 h -120 z M 397.141,132.57 c 118.574,0 204.285,61.418 204.285,175.711 0,117.141 -77.149,174.289 -204.285,174.289 H 122.852 v -350 z m -25.715,458.571 c 115.715,0 194.289,51.429 194.289,168.57 0,94.289 -64.289,148.57 -178.574,148.57 H 122.852 V 591.141 Z M 0,1019.71 h 401.426 c 168.566,0 291.426,-95.71 291.426,-259.999 0,-108.57 -51.426,-171.43 -125.711,-204.281 v -5.719 C 644.289,518.289 730,449.711 730,308.281 730,125.422 607.148,19.7109 411.426,19.7109 H 0 V 1019.71"
                            // style="fill: rgb(140, 152, 166); fill-opacity: 1; fill-rule: nonzero; stroke: none;"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="col mr-0 pr-0" onClick={() => this.clickOnHeader.emit(event)}>
                <s-abdullakh-head-menu headNav={this.headNav} headText={this.headText}/>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  componentDidLoad() {
    document.addEventListener('scroll', () => this.toggleClassOnScroll())
  }


  public toggleClassOnScroll() {
    let scrollTop = window.scrollY;
    if (scrollTop > 35) {
      this.headerFix.id = 'menu_scroll';
    } else {
      this.headerFix.id = '';
    }
  }

  // componentDidLoad() {
  //   this.initAnimation();
  // }
  //
  //
  // /**
  //  * функция для движения картинки во время скрола
  //  * */
  // private initAnimation() {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1,
  //   };
  //   const callback = (entries: IntersectionObserverEntry[]) => {
  //     const intersectionRatio = entries[0].intersectionRatio,
  //       top = entries[0].boundingClientRect.top;
  //
  //     console.log(intersectionRatio)
  //
  //     if (intersectionRatio != 1){
  //       return this.headerFix.id = 'menu_scroll';
  //     }else{
  //       return this.headerFix.id = '';
  //     }
  //   };
  //   this.observer = new IntersectionObserver(callback, options);
  //   this.observer.observe(this.headerFixParent);
  // };
}


