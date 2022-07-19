<template>
    <div class="edit__item">
        <img :src="product.imageURL" alt="">
        <div class="edit__title">{{product.title}}</div>
        <div class="edit__price">{{product.price}} ₽</div>
        <div class="edit__buttons">
            <svg @click="handleEditProduct(product.id)" class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="pointer" @click.prevent="handleDeleteProduct(product.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3338 7.33333L18.1666 2.5H5.83331L2.66718 7.33333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.66666 7.58341C2.66666 7.07714 3.13095 6.66675 3.70369 6.66675H20.2963C20.869 6.66675 21.3333 7.07714 21.3333 7.58341V19.9584C21.3333 20.7178 20.6369 21.3334 19.7778 21.3334H4.22221C3.3631 21.3334 2.66666 20.7178 2.66666 19.9584V7.58341Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                <path d="M16 13.5L12 17.5L8 13.5" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9958 9.5V17.5" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    props: ["product"],
    setup() {
        const store = useStore()
        const router = useRouter()

        const handleDeleteProduct = (id) => {
           store.dispatch("deleteProduct", id)
        }
        const handleEditProduct = (id) => {
           router.push(`/admin/edit/${id}`)
        }

        return{
            handleDeleteProduct,
            handleEditProduct
        }
    }
}
</script>

<style lang="scss">
.pointer{
    cursor: pointer;
}
.edit__item{
    text-align: center;
    position: relative;
    border: 2px solid rgba(114, 114, 114, 0.301);
    padding: 10px;
    border-radius: 10px;

    img{
        width: 210px;
        height: 123px;
        object-fit: cover;
        border-radius: 10px;
    }
    .edit__title{
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;
        color: #FFFFFF;
    }
    .edit__price{
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        margin: 10px 0 35px;
    }
    .edit__buttons{
        display: flex;
        gap: 25px;
        justify-content: center;
    }
}
</style>