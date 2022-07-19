<template>
  <div class="wtapper">
    <Header />
    <StockList />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
import StockList from "@/components/Stock/StockList";
import Header from "@/components/Header/Header.vue";
import Contacts from "@/components/Footer/Contacts.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: { Header, StockList, Footer, Contacts },
};
</script>

<style lang="scss" scoped>
.contact {
  &__section {
    margin-top: -50px;
  }
}
</style>
