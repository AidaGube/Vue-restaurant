<template>
  <main>
    <!-- <div class="container"> -->
      <div class="cart__items">
        <div class="cart__item">
          <div class="item__left">
            <img
              class="cart__item__image"
              :src="item.imageURL"
              alt="item-image"
            />
            <div class="item__description">
              <h4 class="item__title">{{ item.title }}</h4>
              <p class="item__subtitle">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div class="item__right">
            <div class="item__right-items">
              <span></span>
              <div class="item__counter">
                <div @click="handleMinusProduct" class="counter__minus">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13.9718"
                      cy="13.972"
                      r="13.486"
                      fill="#72A479"
                    />
                    <path
                      d="M8 13.8999C8 13.0715 8.67157 12.3999 9.5 12.3999H18.5C19.3284 12.3999 20 13.0715 20 13.8999V13.8999C20 14.7284 19.3284 15.3999 18.5 15.3999H9.5C8.67157 15.3999 8 14.7284 8 13.8999V13.8999Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span>{{ item.count }}</span>
                <div @click="handlePlusProduct" class="counter__plus">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="14.0719"
                      cy="13.972"
                      r="13.486"
                      fill="#72A479"
                    />
                    <g clip-path="url(#clip0_0_1)">
                      <path
                        d="M18.2771 12.6967H15.3463V9.766C15.3463 9.04596 14.7416 8.45658 14.0213 8.45658C13.301 8.45658 12.6962 9.04596 12.6962 9.766V12.6967H9.76547C9.04544 12.6967 8.45605 13.3015 8.45605 14.0218C8.45605 14.7421 9.04544 15.3469 9.76547 15.3469H12.6962V18.2776C12.6962 18.9976 13.301 19.587 14.0213 19.587C14.7416 19.587 15.3463 18.9976 15.3463 18.2776V15.3469H18.2771C18.9971 15.3469 19.5865 14.7421 19.5865 14.0218C19.5865 13.3015 18.9971 12.6967 18.2771 12.6967Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_1">
                        <rect
                          width="11.1304"
                          height="11.1304"
                          fill="white"
                          transform="translate(8.45605 8.45658)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="item__price">{{ item.price * item.count }} ₽</div>
              <div @click="handleDeleteProduct" class="item__delete-btn">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.7285"
                    cy="14.0721"
                    r="13.486"
                    transform="rotate(45 13.7285 14.0721)"
                    fill="#72A479"
                  />
                  <path
                    d="M17.6035 16.1437L15.5311 14.0713L17.6035 11.999C18.1126 11.4898 18.1018 10.6455 17.5924 10.1361C17.0831 9.6268 16.2387 9.61593 15.7296 10.1251L13.6572 12.1974L11.5849 10.1251C11.0757 9.61593 10.2314 9.6268 9.72202 10.1361C9.2127 10.6455 9.20183 11.4898 9.71097 11.999L11.7833 14.0713L9.71097 16.1437C9.20183 16.6528 9.2127 17.4972 9.72202 18.0065C10.2314 18.5159 11.0757 18.5267 11.5849 18.0176L13.6572 15.9452L15.7296 18.0176C16.2387 18.5267 17.0831 18.5159 17.5924 18.0065C18.1018 17.4972 18.1126 16.6528 17.6035 16.1437Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </main>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["item"],
  setup(props) {
    const store = useStore();
    const handleMinusProduct = () => {
      store.commit("DEC_TO_CART", props.item.id);
    };

    const handlePlusProduct = () => {
      store.commit("ADD_TO_CART", props.item.id);
    };

    const handleDeleteProduct = () => {
      store.commit("DELETE_PRODUCT_IN_CART",props.item.id);
    };

    return {
      handleDeleteProduct,
      handlePlusProduct,
      handleMinusProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart__item {
      &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
      );
      bottom: 0;
      left: 5.5px;
    }
}
</style>