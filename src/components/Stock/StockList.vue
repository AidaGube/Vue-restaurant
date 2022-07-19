<template>
  <div class="stock-mt">
    <div class="container">
    <Title title="АКЦИИ" />
  </div>
   <hr />
  <div class="stock__container">
    <div class="stock__items">
      <StockItem v-for="item in stocks" :key="item.id" :item="item" />
    </div>
  </div>
  </div>
</template>

<script>
import Title from "@/components/Title/Title";
import StockItem from "./StockItem.vue";
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  components: { Title, StockItem },
  setup() {

    const store = useStore()

    const stocks = computed(() => store.state.promotions)
    onMounted(() => {
      store.dispatch("getPromotion")
    })

    return {
      stocks
    };
  },
};
</script>

<style lang="scss" scoped>
.stock__small {
   padding-top: 80px;
     @media (max-width: 670px) {
        padding-top: 130px;
    }
    @media (max-width: 450px) 
     {
    padding-top: 115px;
    }
}
</style>