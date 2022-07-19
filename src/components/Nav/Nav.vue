<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav__menu">
        <li
          v-for="(item, index) in navItems"
          :key="item"
          class="nav__menu_item"
          :class="{ active: index === activeItem }"
          @click="handleActiveItem(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  setup(props, context) {
    const navItems = [
      "Все",
      "Холодные закуски",
      "Горячие закуски",
      "Мясные блюда",
      "Супы",
      "Рыбные блюда",
      "Гриль меню",
      "Фирменные блюда",
      "Напитки",
    ];
    // context.emit(navItems)
    const store = useStore();
    const activeItem = ref(computed(() => store.state.category));

    const handleActiveItem = (index) => {
      store.dispatch("setCategory", index);
    };
    return {
      navItems,
      activeItem,
      handleActiveItem,
    };
  },
};
</script>

<style>
</style>