<template>
  <Header />
  <Nav />
  <div v-if="true" class="container">
    <div class="cart__header">
      <div class="cart__header-content">
        <div class="cart__header-content_up">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z"
              fill="white"
            />
          </svg>
          <router-link to="/" class="cart__header-content_up">
            к выбору блюда
          </router-link>
        </div>
        <div class="cart__header-content_down">
          <div class="title">
            <h1>КОРЗИНА</h1>
            <p>
              (в корзине <b>{{ totalCount ? totalCount : 0 }} товара</b>)
            </p>
          </div>
        </div>
      </div>
    </div>

    <CartItem v-for="item in cartItems" :key="item.id" :item="item[1]" />

    <div class="cart__add-title"><h3>ДОБАВИТЬ К ЗАКАЗУ</h3></div>
    <div class="cart__add">
      <CartAdd
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <hr />
    <div class="cart__price">
      <div class="cart__price-items">
        <div class="cart__price-item">
          <b class="cart__price-finish"
            >Итого:
            <span
              ><b>{{ totalSum ? totalSum : 0 }} ₽</b></span
            >
          </b>
          <div class="cart__price-delivery">
            До бесплатной доставки не хватет:
            <span>{{ totalDelivery ? totalDelivery : 0 }} ₽</span>
          </div>
          <span class="cart__price-min">Минимальная сумма заказа 1500 ₽</span>
        </div>
        <router-link :to="'/cart/pay'">
          <Button
            class="cart__price-btn"
            className="btn"
            text="Оформить заказ"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <CartIsEmpty />
  </div>
  <Footer />
</template>

<script>
import CartIsEmpty from "@/components/Cart/CartIsEmpty";
import Button from "@/components/Buttons/Button.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import CartItem from "@/components/Cart/CartItem.vue";
import Nav from "@/components/Nav/Nav.vue";
import AddImg from "@/assets/images/add-img.png";
import CartAdd from "@/components/Cart/CartAdd.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: { Header, Footer, CartItem, Nav, Button, CartIsEmpty, CartAdd },
  setup() {
    const store = useStore();
    const totalCount = computed(() => store.getters.totalCountOfProducts);
    const totalSum = computed(() => store.getters.totalSumOfProducts);
    const cartItems = computed(() => store.state.cartItems);
    const totalDelivery = computed(() => store.getters.totalDeliveryOfProducts);

    const products = ref([
      {
        id: 11,
        title: "КВАС АНАНАСОВЫЙ",
        description:
          "Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто",
        imageURL: AddImg,
        price: 1640,
      },
      {
        id: 14,
        title: "ГРИСССИНИ",
        description:
          "Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто",
        imageURL: AddImg,
        price: 1640,
      },
      {
        id: 15,
        title: "ПИЦЦА ПЕППЕРОНИ",
        description:
          "Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто",
        imageURL: AddImg,
        price: 1640,
      },
      {
        id: 16,
        title: "КВАС ФРУКТОВЫЙ",
        description:
          "Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто",
        imageURL: AddImg,
        price: 1640,
      },
    ]);
    return {
      products,
      cartItems,
      totalCount,
      totalSum,
      totalDelivery,
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
}
hr {
  margin: 0 auto;
  position: relative;
  top: 40px;
  left: 0px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  @media (max-width: 759px) {
    display: none;
  }
}
</style> 
