<template>
  <form class="welcome__form" @submit.prevent="handleSubmit">
    <input v-model="name" type="text" required placeholder="Имя пользователя" />
    <input
      v-model="email"
      type="email"
      required
      placeholder="Электронный адрес"
    />
    <input v-model="password" type="password" required placeholder="Пароль" />
    <Button text="Регистрация" class="signup__btn" />
  </form>
</template>

<script>
import Button from "@/components/Buttons/Button.vue";
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignup";
export default {
  components: { Button },
  setup(props,context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");


    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      
      if (!error.value) {
        context.emit("successSignup");
      } else {
        console.log(error.value);
      }
    };

    return { handleSubmit, name, email, password,};
  },
};
</script>

<style lang="scss">
</style>