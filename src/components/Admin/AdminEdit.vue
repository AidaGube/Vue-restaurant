<template>
    <div class="admin_edit">
        <p>Выберите элемент редоктирования</p>
        <div class="edit__items">
            <EditItem v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import EditItem from "./EditItem.vue"
export default {
    components: {EditItem},
    setup() {
        const store = useStore()
        const products = computed(() => store.state.products)

        onMounted(() => {
            store.dispatch("getProducts")
        })

        return{
            products
        }
    }
}
</script>

<style lang="scss">
.admin_edit{
    margin-left: 80px;
    margin-top: 40px;

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 29px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
}
.edit__items{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 1096px !important;
    margin: 0 auto;
    justify-content: start;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
    padding: 20px 35px;
}
</style>