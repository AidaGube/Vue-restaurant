<template>
    <div @click="handleDetailItem(product.id)" class="product__item">
        <div class="item__image">
            <img :src="product.imageURL" alt="item-image">
        </div>
        <div class="item__description">
            <div class="item__header">
                <div class="item__title">{{product.title}}</div>
                <div class="item__weight">Вес: <span>{{product.weight}}</span> г</div>
            </div>
            <div class="item__subtitle">{{subTitle}}</div>
            <div class="item__footer">
                <div class="item__price">{{product.price}} ₽</div>
                <button class="btn item__btn">
                Подробнее 
          <svg
            width="28"
            height="29"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.46967 12.4697C9.17678 12.7626 9.17678 13.2374 9.46967 13.5303L14.2426 18.3033C14.5355 18.5962 15.0104 18.5962 15.3033 18.3033C15.5962 18.0104 15.5962 17.5355 15.3033 17.2426L11.0607 13L15.3033 8.75736C15.5962 8.46447 15.5962 7.98959 15.3033 7.6967C15.0104 7.40381 14.5355 7.40381 14.2426 7.6967L9.46967 12.4697ZM11 12.25L10 12.25L10 13.75L11 13.75L11 12.25Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="1.25806"
                y1="1.47727"
                x2="29.0993"
                y2="14.4163"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#618967" />
                <stop offset="1" stop-color="#72A479" />
              </linearGradient>
            </defs>
          </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex"
import {useRouter} from "vue-router"
export default {
    props: ["product"],
    setup(props) {
        let text = props.product.description
        text = text.split(" ")
        const subTitle = text[0] + text[1] + "..."

        const store = useStore()
        const router = useRouter()
        
        const handleDetailItem = (id) => {
           store.dispatch("getProductDetails",id)
           router.push(`/product/${props.product.id}`)
        }

        return{
            subTitle,
            handleDetailItem
        }
    }
}
</script>

<style lang="scss">
.item__image{
    max-height: 226px;
    img{
        height: 226px;
        object-fit: cover;
    }
}
</style>