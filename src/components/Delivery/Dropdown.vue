<template>
  <!-- <div class="container"> -->
  <div class="delivery__conditions">
    <div
      @click="showDropdown = !showDropdown"
      class="delivery__condition_item delivery__remark"
    >
      <span>{{ text }}</span>
      <img
        :class="{ delivery__arrow: showDropdown === true }"
        :src="arrowUp"
        alt="arrow-up"
      />
    </div>
    <div v-if="showDropdown" class="delivery__condition_text">
      <p class="delivery__quality">
        Мы очень внимательно следим за качеством нашей работы, поэтому, если у
        вас будут какие-либо замечания или предложения, то обязательно сообщайте
        их нам
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import arrowDown from "@/assets/images/arrow-down.svg";
import arrowUp from "@/assets/images/arrow-up.svg";
import { ref } from "@vue/reactivity";

export default {
  props: ["text"],
  setup() {
    const showDropdown = ref(false);

    return {
      arrowDown,
      arrowUp,
      showDropdown,
    };
  },
};
</script>

<style lang="scss">
.delivery {
  &__conditions {
    width: 95%;
  }
  &__title {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
    color: #fff;
    margin-top: 50px;
    margin-bottom: 44px;
    padding-left: 19px;
    border-left: 2px solid #618967;
  }

  &__condition_item {
    display: flex;
    justify-content: space-between;
    padding: 16px 30.5px 17px 30px;
    background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
    border-radius: 10px;
    color: #fff;
    z-index: 1;
  }
  &__condition_item:not(:nth-child(4)) {
    margin-bottom: 10px;
  }
  &__remark {
    margin-bottom: 10px;
  }

  &__condition_text {
    min-width: 547px;
    min-height: 150px;
    background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
    border-radius: 0 0 10px 10px;
    margin-top: -12px;
    margin-bottom: 15px;
    z-index: -1;
  }
  &__quality {
    padding: 40px 41px 40px 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }
  &__arrow {
    transform: rotate(180deg);
  }

  @media (max-width: 1340) {
      &__wrapper {
        width: 70%;
      }
      &__conditions {
        max-width: 70%;
      }
  }
  @media (max-width: 1024px) {
      &__quality {
        text-align: justify;
      }
  }
  @media (max-width: 726px) {
     &__conditions{
        width: 100%;
        margin-top: 10px;
      }
      &__condition_item {
        max-height: 55px;
        align-items: center;
      }
      &__condition_text {
        min-width: 85%;
        min-height: 100px;
      }
      &__quality {
        padding: 21px 14px 22px 20px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }
      &__condition_item {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
      }
    }
    img {
      max-width: 14px;
      max-height: 7px;
    }
}
</style>