<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div @click="handleActiveMenu" class="burger__menu">
          <div class="burger__menu-icon" :class="{ active: burgerMenuActive }">
            <span></span>
          </div>
          <p>МЕНЮ</p>
        </div>
        <router-link to="/" class="logo"> LOGOS </router-link>
        <Searchbar />
        <div class="header__info">
          <div class="info__contact">
            <div class="contact__icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.99329 3.249C2.20417 2.89915 3.36678 1.62917 4.19526 1.66751C4.44311 1.68873 4.66222 1.83798 4.84024 2.01187H4.84092C5.249 2.4117 6.41982 3.92062 6.48555 4.23829C6.64782 5.01739 5.7187 5.46651 6.00284 6.25178C6.72725 8.02428 7.97544 9.27236 9.74879 9.99602C10.5334 10.2808 10.9826 9.35246 11.7618 9.51404C12.0795 9.58045 13.5892 10.7505 13.9884 11.1592V11.1592C14.1616 11.3365 14.3123 11.5563 14.3328 11.8041C14.3636 12.677 13.0148 13.8553 12.7518 14.0059C12.1315 14.4502 11.3222 14.442 10.3356 13.9833C7.58243 12.8379 3.1826 8.52132 2.01588 5.66437C1.56946 4.6833 1.53934 3.86859 1.99329 3.249Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.71027 1.83331C12.1783 2.10731 14.1269 4.05398 14.4043 6.52131"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.71027 4.19531C10.8903 4.42531 11.8123 5.34731 12.0423 6.52731"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="contacts">
              <span>Контакты:</span>
              <h4 class="contact__phone">+7 (917) 510-57-59</h4>
            </div>
          </div>
          <Navbar />
        </div>

        <div class="header__button">
          <router-link to="/cart">
            <button class="btn header__btn">
              <svg
                width="48"
                height="27"
                viewBox="0 0 48 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="26.5"
                  x2="48"
                  y2="26.5"
                  stroke="white"
                  stroke-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4223 19.8203C19.8443 19.8203 20.1873 20.1633 20.1873 20.5853C20.1873 21.0073 19.8443 21.3493 19.4223 21.3493C19.0003 21.3493 18.6583 21.0073 18.6583 20.5853C18.6583 20.1633 19.0003 19.8203 19.4223 19.8203Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.6747 19.8203C31.0967 19.8203 31.4397 20.1633 31.4397 20.5853C31.4397 21.0073 31.0967 21.3493 30.6747 21.3493C30.2527 21.3493 29.9097 21.0073 29.9097 20.5853C29.9097 20.1633 30.2527 19.8203 30.6747 19.8203Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.7499 3.25L16.8299 3.61L17.7929 15.083C17.8709 16.018 18.6519 16.736 19.5899 16.736H30.5019C31.3979 16.736 32.1579 16.078 32.2869 15.19L33.2359 8.632C33.3529 7.823 32.7259 7.099 31.9089 7.099H17.1639"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.1254 10.795H28.8984"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Корзина
              <div></div>
              <span
                ><b>{{ totalCount ? totalCount : 0 }}</b></span
              >
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <BurgerMenu :activeMenu="burgerMenuActive" />
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout";
import Navbar from "@/components/Welcome/Navbar";
import {user }from "@/composables/useUser";
import Searchbar from "@/components/SearchBar/SearchBar";
import { ref } from "@vue/reactivity";
export default {
  components: { BurgerMenu, useLogout, Navbar, user, Searchbar },
  setup() {
    const router = useRouter();
    const store = useStore();
    const burgerMenuActive = ref(false);

    const handleActiveMenu = () => {
      burgerMenuActive.value = !burgerMenuActive.value;
      document.body.classList.toggle("_blocked");
      // if (burgerMenuActive.value) {
      //   document.body.classList.add("_blocked");
      // } else{  
      //   document.body.classList.remove("_blocked");
      // }
    };
    const totalCount = computed(() => store.getters.totalCountOfProducts);

    const showForm = ref(true);

    return {
      burgerMenuActive,
      handleActiveMenu,
      totalCount,
      showForm,
    };
  },
};
</script>

<style lang="scss">
.logo {
  z-index: 10;
}

.burger__menu-icon {
  width: 25px;
  height: 17px;
  position: relative;

  &::before,
  &::after,
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    background-color: #65906c;
    transition: 0.3s all ease;
  }
  &::before,
  &::after {
    content: "";
  }
  span {
    top: 42%;
    transform: scale(1);
  }
  &.active span {
    transform: scale(0);
  }
  &::before {
    top: 1px;
  }
  &.active::before {
    transform: rotate(45deg);
    top: 50%;
  }
  &::after {
    bottom: 1px;
  }
  &.active::after {
    transform: rotate(-45deg);
    top: 50%;
  }
}
</style>