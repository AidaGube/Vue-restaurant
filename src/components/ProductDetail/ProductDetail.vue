<template>
  <section class="detail__card">
    <div class="container">
      <router-link to="/" class="go__back">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13" cy="13" r="13" fill="url(#paint0_linear_0_1)" />
          <path
            d="M9.46967 12.4697C9.17678 12.7626 9.17678 13.2374 9.46967 13.5303L14.2426 18.3033C14.5355 18.5962 15.0104 18.5962 15.3033 18.3033C15.5962 18.0104 15.5962 17.5355 15.3033 17.2426L11.0607 13L15.3033 8.75736C15.5962 8.46447 15.5962 7.98959 15.3033 7.6967C15.0104 7.40381 14.5355 7.40381 14.2426 7.6967L9.46967 12.4697ZM11 12.25L10 12.25L10 13.75L11 13.75L11 12.25Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="1.25806"
              y1="1.47727"
              x2="29.0993"
              y2="14.4163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#618967" />
              <stop offset="1" stop-color="#72A479" />
            </linearGradient>
          </defs>
        </svg>
        Вернуться назад
      </router-link>

      <div class="card">
        <i class="cart__added-product" v-if="addedProduct">{{
          addedProduct
        }}</i>
        <div class="card__image">
          <img :src="product.imageURL" alt="card-image" />
        </div>
        <div class="card__info">
          <div class="info__title">{{ product.title }}</div>
          <p class="info__description">{{ product.description }}</p>
          <div class="info__weight">Вес: {{ product.weight }} г</div>
          <div class="info__pay">
            <button @click="handleAddProductToCart" class="btn card__info_btn">
              <span>Корзина</span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1244 18.5268L16.7047 5.30012C16.681 5.08717 16.4917 4.92154 16.2788 4.92154H13.6524V4.11706C13.6524 1.84558 11.8068 0 9.53532 0C7.26384 0 5.41826 1.84558 5.41826 4.11706V4.92154H2.72087C2.50792 4.92154 2.31863 5.08717 2.29497 5.30012L0.875296 18.5268C0.851634 18.6451 0.898957 18.7634 0.969941 18.858C1.04092 18.9527 1.15923 19 1.27754 19H17.7221C17.8404 19 17.9587 18.9527 18.0297 18.858C18.1007 18.7634 18.148 18.6451 18.1244 18.5268ZM13.2265 7.31133C13.4394 7.31133 13.6051 7.47696 13.6051 7.68991C13.6051 7.90286 13.4394 8.06849 13.2265 8.06849C13.0135 8.06849 12.8479 7.90286 12.8479 7.68991C12.8479 7.47696 13.0135 7.31133 13.2265 7.31133ZM6.27007 4.11706C6.27007 2.3188 7.73706 0.851806 9.53532 0.851806C11.3336 0.851806 12.8006 2.3188 12.8006 4.11706V4.92154H6.27007V4.11706ZM5.84416 7.31133C6.05711 7.31133 6.22274 7.47696 6.22274 7.68991C6.22274 7.90286 6.05711 8.06849 5.84416 8.06849C5.63121 8.06849 5.46558 7.90286 5.46558 7.68991C5.46558 7.47696 5.63121 7.31133 5.84416 7.31133ZM1.77442 18.1245L3.09945 5.74969H5.41826V6.53051C4.94503 6.69614 4.61378 7.1457 4.61378 7.66625C4.61378 8.32877 5.15799 8.87298 5.8205 8.87298C6.48302 8.87298 7.02723 8.32877 7.02723 7.66625C7.02723 7.1457 6.69597 6.69614 6.22274 6.53051V5.74969H12.7533V6.53051C12.28 6.69614 11.9488 7.1457 11.9488 7.66625C11.9488 8.32877 12.493 8.87298 13.1555 8.87298C13.818 8.87298 14.3622 8.32877 14.3622 7.66625C14.3622 7.1457 14.031 6.69614 13.5577 6.53051V5.74969H15.9712L17.2962 18.1245H1.77442Z"
                  fill="white"
                />
              </svg>
            </button>

            <div class="info__price">{{ product.price }} ₽</div>
          </div>
          <div class="info__footer">
            <div
              v-for="item in product.calories"
              :key="item"
              class="info__footer-item"
            >
              <p>{{ item.calorie }}</p>
              <span>{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalWelcome
      v-if="popupModals.buttonModal"
      :TogglePopup="() => TogglePopup('buttonModal')"
      :popupModals="popupModals"
    />
</template>

<script>
import ModalWelcome from "@/components/Welcome/ModalWelcome";
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import {user} from "@/composables/useUser"
export default {
  components: {ModalWelcome},
  // props: [],
  setup(props) {
    const store = useStore();

    const product = computed(() => store.state.productDetails);

    const addedProduct = computed(
      () => store.state.cartItems.get(product.value.id)?.count
    );

    const handleAddProductToCart = () => {
      if (!user.value) {
        TogglePopup("buttonModal")
      }else{
        store.commit("ADD_PRODUCT_TO_CART", product.value);
      }
    };

    const popupModals = ref({
      buttonModal: false,
    });

    const TogglePopup = (modal) => {
      popupModals.value[modal] = !popupModals.value[modal];
      // document.querySelector("body").style.overflow = "hidden";
    };

    // const handleClick = () => {
       
    // }

    return {
      product,
      handleAddProductToCart,
      addedProduct,
      popupModals,
      TogglePopup,
      // handleClick
    };
  },
};
</script>

<style>
/* .detail__card{
    margin-top: 220px;
} */
/* .card-image{
  width: 50%;
} */
.card {
  position: relative;
}
.cart__added-product {
  top: -15px;
  left: -15px;
}
</style>
