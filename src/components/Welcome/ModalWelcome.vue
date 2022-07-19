<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="container">
        <div class="welcome__description">
          <div class="welcome__item">
            <div v-if="showForm">
              <button class="cart__bt-close btn__welcome" @click="TogglePopup">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 1L1 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <img
                class="welcome__image"
                src="@/assets/images/1.jpg"
                alt="item-image"
              />
              <h2 class="welcome__title">Регистрация</h2>
              <SignUpForm @successSignup="enterChat" />
              <p class="welcome__subtitle">
                Есть аккаунт?
                <span @click="showForm = false">Вход</span>
              </p>
            </div>

            <div v-else>
              <button class="cart__bt-close btn__welcome" @click="TogglePopup">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L15 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 1L1 17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <img
                class="welcome__image"
                src="@/assets/images/1.jpg"
                alt="item-image"
              />
              <h2 class="welcome__title welcome__title-back">Вход на сайт</h2>
              <Login @successLogin="enterChat" />
              <p class="welcome__subtitle">
                У вас еще нет аккаунта?
                <span @click="showForm = true">Зарегистрироваться</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SignUpForm from "@/components/Welcome/SignUp";
import Login from "@/components/Welcome/Login";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  props: ["TogglePopup", "popupModals"],
  components: { SignUpForm, Login },
  setup(props, context) {
    const showForm = ref(false);

    const enterChat = () => {
      context.emit("successLogin");
      // router.push("/stock");
      props.TogglePopup("buttonModal");
    };

    return {
      enterChat,
      showForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn__welcome {
  position: relative;
  top: -190px;
  left: 280px;
  @media (max-width: 670px) {
      top: -135px;
    left: 215px;
  }
  @media (max-width: 350px) {
      top: -135px;
    left: 195px;
  }
}
</style>>

