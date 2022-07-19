<template>
  <div class="cart__add-items">
    <div class="cart__add-item col-3">
      <i class="cart__added" v-if="addedProduct">{{ addedProduct }}</i>
      <div class="cart__add-description">
        <img class="cart__add-image" :src="product.imageURL" alt="add-image" />
        <div class="cart__add-label">
          <h4 class="cart__add-subtitle">{{ product.title }}</h4>
          <div class="cart__add-pushitems">
            <div
              @click="handleAddProductToCart"
              class="cart__add-push button--add"
            >
              Добавить
              <img
                class="cart__add-plus"
                src="@/assets/images/add-plus.svg"
                alt="title"
              />
            </div>
            <span class="cart__add-price"> {{ product.price }} ₽ </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },
  setup(props) {
    const store = useStore();

    const addedProduct = computed(
      () => store.state.cartItems.get(props.product.id)?.count
    );

    const handleAddProductToCart = () => {
      store.commit("ADD_PRODUCT_TO_CART", props.product);
    };

    return { handleAddProductToCart, addedProduct };
  },
};
</script>

<style lang="scss" scoped>
.cart__add-items {
  position: relative;
  &::before {
    position: absolute;
    width: 1px;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    right: -15px;
  }
  &:last-child {
    padding-bottom: 0;
    &::before {
      display: none;
    }
  }
  @media (max-width: 913px) {
    position: relative;
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
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  @media (max-width: 1231px) {
    &:last-child {
      &::before {
        display: block;
      }
    }
  }

  @media (max-width: 933px) {
    .cart__add-items {
      &:last-child {
        &::before {
          display: block;
        }
      }
    }
  }

  @media (max-width: 913px) {
    &::before {
      display: none;
    }
    &:last-child {
      padding-bottom: 0;
      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 630px) {
    &::before {
      display: none;
    }
    &:last-child {
      padding-bottom: 0;
      &::before {
        display: none;
      }
    }
  }
  // &:last-child::before{
  //   height: 0;
  // }
}
</style>