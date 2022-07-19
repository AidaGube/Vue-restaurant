<template>
    <div class="add__product">
        <form @submit.prevent="handleAddProduct">
            <div class="left-side">
                <label class="form__label">Название продукта</label>
                <input required v-model="productTitle" class="input" type="text">
                <label class="form__label">Описание продукта</label>
                <textarea required v-model="productDescription" class="input textarea"></textarea>
                <div class="add__file">
                    <label>
                        <input @change="handleChange" type="file">
                        <span>Закрепить фото</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.24C2.63417 19.1141 2.00168 17.5872 2.00168 15.995C2.00168 14.4028 2.63417 12.8758 3.76002 11.75L12.95 2.55998C13.7006 1.80942 14.7186 1.38776 15.78 1.38776C16.8415 1.38776 17.8595 1.80942 18.61 2.55998C19.3606 3.31054 19.7822 4.32852 19.7822 5.38998C19.7822 6.45144 19.3606 7.46942 18.61 8.21998L9.41002 17.41C9.03473 17.7853 8.52574 17.9961 7.99502 17.9961C7.46429 17.9961 6.9553 17.7853 6.58002 17.41C6.20473 17.0347 5.9939 16.5257 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.09998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </label>
                </div>
                <div class="form__footer">
                    <div class="form__counter">
                        <label class="form__label">Вес продукта</label>
                        <div class="counter">
                            <svg @click="countPlus" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18.5" stroke="#6F9F76" stroke-width="3"/>
                                <path d="M20 13V27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 20H27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>{{productWeight}}</span>
                            <svg @click="countMinus" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18.5" stroke="#6F9F76" stroke-width="3"/>
                                <path d="M13 20H27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="form__price">
                        <label class="form__label">Укажите цену</label>
                        <input v-model="productPrice" type="text" class="input">
                    </div>
                </div>
            <button class="btn">Добавить</button>
            </div>
            <div class="right-side">
                <!-- <label></label> -->
                <div class="calories">
                    <div v-for="item in productCalories" :key="item" class="calorie">
                        <label class="form__label">{{item.calorie}}</label>
                        <input v-model="item.count" type="text" class="input" >
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from "vuex"
export default {

    setup() {
        const store = useStore()

        const productTitle = ref("")
        const productDescription = ref("")
        const productImage = ref("")
        const productPrice = ref(0)
        const productWeight = ref(210)
        const productCategory = ref(0)
        const productCalories = ref([
            {
                calorie: "Белки",
                count: 17.23
            },
            {
                calorie: "Жиры",
                count: 7.63
            },
            {
                calorie: "Углеводы",
                count: 22.35
            },
            {
                calorie: "Ккал",
                count: 234
            },
            {
                calorie: "Вес",
                count: 210
            }
        ])

        const countPlus = () => {
            productWeight.value = productWeight.value + 5
        }
        const countMinus = () => {
            if (productWeight.value < 5) {
                return
            }
            productWeight.value = productWeight.value - 5
        }
        const handleChange = (e) => {
        //    console.log(e.target.files);
           const files = e.target.files
           createImage(files[0])
        }
        const createImage = (file) => {
            let image = new Image()
            let reader = new FileReader();
            reader.onload = (e) => {
                productImage.value = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        const handleAddProduct = () => {
            const product = {
                title: productTitle.value,
                description: productDescription.value,
                price: productPrice.value,
                imageURL: productImage.value,
                category: productCategory.value,
                weight: productWeight.value,
                calories: productCalories.value
            }

            store.dispatch("addProduct",product)
        }
        const fa = "////sdv"
        // setInterval(() => {
        //     console.log(productImage.value);
        // }, 1000)
        return{
            handleAddProduct,
            countPlus,
            countMinus,
            handleChange,
            productTitle,
            productDescription,
            productImage,
            productPrice,
            productWeight,
            productCalories,
            fa
        }
    }
}
</script>

<style lang="scss" scoped>
.calories{
    display: flex;
    gap: 15px;
    width: 400px;
    flex-wrap: wrap;
    .calorie{
        display: flex;
        flex-direction: column;
    }
    .input{
        width: 100px;
    }
}
.add {

    &__product {
        margin-left: 80px;
    }

    &__file {
        input{
            display: none;
        }
        label{
            display: flex;
            align-items: center;
            gap: 13px;
            background: linear-gradient(90deg, #5B5B5B 0%, #645F5F 100%);
            border-radius: 25px;
            max-width: 250px;
            padding: 13px 30px;
            cursor: pointer;

            span{
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;

                color: #FFFFFF;
            }
        }
    }
}
.form {

    &__label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin: 40px 0 5px;
    }

    &__footer {
        display: flex;
        align-items: flex-start;
    }

    &__counter {
        display: flex;
        flex-direction: column;

        .counter{
            margin-top: 10px;
        }
    }

    &__price {
        display: flex;
        flex-direction: column;
        margin-left: 40px;

        .input{
            margin-top: 6px;
            max-width: 225px;
        }
    }
}

form{
    display: flex;
    gap: 20px;
    .left-side{
        display: flex;
        flex-direction: column;

    }
    .input {
        background: linear-gradient(90deg, #5B5B5B 0%, #645F5F 100%);
        border-radius: 25px;
        width: 400px;
        height: 50px;
        padding: 7px 15px;
    }
    .textarea {
        height: 150px;
    }
}
</style>