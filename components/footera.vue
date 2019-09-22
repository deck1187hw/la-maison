<template>
  <footer class="space--sm footer-1 text-center-xs bg--dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <ul class="list-inline list--hover">
            <li>
              <nuxt-link to="/about">
                <span class="h6 type--uppercase">About us</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">
                <span class="h6 type--uppercase">Contact</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/menus">
                <span class="h6 type--uppercase">Menus</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 text-right text-center-xs">
          <ul class="social-list list-inline list--hover">
            <li>
              <a href="#">
                <i class="socicon socicon-google icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-twitter icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-facebook icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-instagram icon icon--xs"></i>
              </a>
            </li>
          </ul>
          <a href="#" class="btn type--uppercase">
            <span class="btn__text">Contact Us</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <img alt="LA MAISON - Mobile BBQ Service in Sussex" class="logo" src="img/logo-light.png" />
          <span class="type--fine-print">
            ©
            <span class="update-year"></span> LA MAISON - Mobile BBQ Service in Sussex
          </span>
          <a class="type--fine-print" href="#">Privacy Policy</a>
          <a class="type--fine-print" href="#">Legal</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer .logo {
  max-height: 4.671429em;
}
</style>