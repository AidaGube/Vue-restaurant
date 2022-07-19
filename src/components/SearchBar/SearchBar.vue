<template>
  <div class="header__cearch-bar">
    <h1>{{upcaseInput}}</h1>
    <input
      @input="handleChange"
      v-model="searchData"
      type="text"
      placeholder="Введите текст для поиска..."
    />
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.7666"
        cy="11.7666"
        r="8.98856"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0183 18.4851L21.5423 22"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from '@vue/runtime-core';
export default {
  setup() {
    const store = useStore();

    const searchData = ref("");

    const handleChange = () => {
      store.commit("SEARCH_ITEMS", searchData.value);
    };

   

    return {
      searchData,
      handleChange,
    };
  },
};
</script>

<style>
</style>