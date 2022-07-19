<template>
  <div class="wrapper">
    <footer class="footer">
      <div @click="scrollToTop">
        <svg
          class="arrow"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="white" />
          <path
            d="M34.0607 25.9396C33.4749 25.3538 32.5252 25.3538 31.9394 25.9396L22.3935 35.4856C21.8077 36.0714 21.8077 37.0211 22.3935 37.6069C22.9793 38.1927 23.9291 38.1927 24.5148 37.6069L33.0001 29.1216L41.4854 37.6068C42.0712 38.1926 43.0209 38.1926 43.6067 37.6068C44.1925 37.021 44.1925 36.0712 43.6067 35.4855L34.0607 25.9396ZM34.5001 29.0001L34.5 27.0002L31.5 27.0003L31.5001 29.0001L34.5001 29.0001Z"
            fill="#222021"
          />
        </svg>
      </div>
      <div class="footer__content container">
        <div class="footer__copyrigth">
          <div class="logo">LOGOS</div>
          <p>© ООО СК «АПШЕРОН» Все права защищены. 2010-2020</p>
          <ul>
            <li>Пользовательское соглашение</li>
            <router-link :to="'/delivery'"> <li>Карта сайта</li></router-link>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
        <ul class="footer__menu">
           <router-link v-for="item in footerItems" :key="item.path" :to="item.path"><li>{{item.title}}</li></router-link>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const footerItems = [
      {
        title: "О ресторане",
        path: "/"
      },
      {
        title: "Акции",
        path: "/stock"
      },
      {
        title: "Возврат товара",
        path: "/delivery"
      },
      {
        title: "Условия доставки",
        path: "/delivery"
      },
      
    ]


    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    return { scrollToTop,footerItems };
  },
};
</script>

<style>
</style>