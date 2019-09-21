<template>
  <div class="nav-container">
    <div>
      <div class="bar bar--sm visible-xs">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-2">
              <a href="index.html">
                <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
              </a>
            </div>
            <div class="col-9 col-md-10 text-right">
              <a href="#" class="hamburger-toggle" data-toggle-class="#menu2;hidden-xs hidden-sm">
                <i class="icon icon--sm stack-interface stack-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu2" class="bar bar-2 hidden-xs">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 text-center text-left-sm hidden-xs order-lg-2">
              <div class="bar__module">
                <a href="index.html">
                  <img class="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                  <img class="logo logo-light" alt="logo" src="img/logo-light.png" />
                </a>
              </div>
            </div>
            <div class="col-lg-5 order-lg-1">
              <div class="bar__module">
                <ul class="menu-horizontal text-left">
                  <li>
                    <a href="#">Single</a>
                  </li>
                  <li class="dropdown">
                    <span class="dropdown__trigger">Dropdown Slim</span>
                    <div class="dropdown__container">
                      <div class="container">
                        <div class="row">
                          <div class="dropdown__content col-lg-2">
                            <ul class="menu-vertical">
                              <li>
                                <a href="#">Single Link</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="dropdown">
                    <span class="dropdown__trigger">Dropdown Wide</span>
                    <div class="dropdown__container">
                      <div class="container">
                        <div class="row">
                          <div class="dropdown__content col-lg-12 row w-100">
                            <div class="col-lg-3">
                              <h5>Menu Title</h5>
                              <ul class="menu-vertical">
                                <li>
                                  <a href="#">Single Link</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <h5>Menu Title</h5>
                              <ul class="menu-vertical">
                                <li>
                                  <a href="#">Single Link</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <h5>Menu Title</h5>
                              <ul class="menu-vertical">
                                <li>
                                  <a href="#">Single Link</a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3">
                              <h5>Menu Title</h5>
                              <ul class="menu-vertical">
                                <li>
                                  <a href="#">Single Link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 text-right text-left-xs text-left-sm order-lg-3">
              <div class="bar__module">
                <a class="btn btn--sm type--uppercase btn--primary" href="#">
                  <span class="btn__text">Contact us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.bar{
  padding:1em 0
}
.bar .logo {
  max-height: inherit;
  max-width: inherit;
  height: 80px;
}
</style>