<template>
  <form class="welcome__form" @submit.prevent="handleSubmit">
    <input
      v-model="email"
      type="email"
      required
      placeholder="Электронный адрес"
    />
    <input v-model="password" type="password" required placeholder="Пароль" />
    <Button  text="Войти" class="signup__btn" />
  </form>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import { ref } from "@vue/reactivity";
import useLogin from "@/composables/useLogin";
export default {
  components: { Button },
  setup(props,context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("successLogin");
      }      
      else {
        console.log(error.value);
      }
    };
    return { handleSubmit, email, password,error };
  },
};
</script>

<style>
</style>