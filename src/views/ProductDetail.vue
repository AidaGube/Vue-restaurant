<template>
<div class="wrapper">
    <Header />
    <!-- <Nav /> -->
    <main>
        <ProductDetail />
        <ProductList title="С ЭТИМ ТОВАРОМ ПОКУПАЮТ" />
    </main>
    <Footer />

</div>
</template>

<script>
import Header from "@/components/Header/Header"
import Nav from "@/components/Nav/Nav"
import Footer from "@/components/Footer/Footer"
import ProductDetail from "@/components/ProductDetail/ProductDetail"
import ProductList from "@/components/ProductList/ProductList"
export default {
    components: {Header,Footer,ProductDetail,ProductList,Nav}
}
</script>

<style>
</style>