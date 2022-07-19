<template>
  <div class="container">
    <Title :title="title" />
  </div>
  <div class="container long">
    <div v-if="products.length" class="product__list">
      <ProductItem
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />

  </div>
  <div v-else class="product__list">
    <ProductItemSceleton />
    <ProductItemSceleton />
    <ProductItemSceleton />
    <ProductItemSceleton />
  </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title";
import ProductItem from "./ProductItem";
import ProductItemSceleton from "./ProductItemSceleton";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  components: { Title, ProductItem, ProductItemSceleton },
  props: ["title", "className","products"],
  setup() {
    const store = useStore();

    const products = computed(() => store.state.products);

    onMounted(() => {
      store.dispatch("getProducts");
    });

    const filteredProducts = computed(() => {
      return products.value.filter((product) =>
       product.title.toUpperCase().includes(store.state.searchedItems.toUpperCase())
      )
    });

    return {
      products,
      filteredProducts,
    };
  },
};
</script>

<style>
</style>