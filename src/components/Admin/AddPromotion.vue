<template>
    <div class="admin__add-promotion">
        <form @submit.prevent="handleSubmit">
            <label class="form__label">Название акции</label>
            <input v-model="stockTitle" type="text" class="input">
            <label class="form__label">Описание акции</label>
            <textarea v-model="stockDescription" class="textarea input"></textarea>
            <div class="add__file">
                <label>
                    <input @change="handleChange" type="file">
                    <span>Закрепить фото</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.24C2.63417 19.1141 2.00168 17.5872 2.00168 15.995C2.00168 14.4028 2.63417 12.8758 3.76002 11.75L12.95 2.55998C13.7006 1.80942 14.7186 1.38776 15.78 1.38776C16.8415 1.38776 17.8595 1.80942 18.61 2.55998C19.3606 3.31054 19.7822 4.32852 19.7822 5.38998C19.7822 6.45144 19.3606 7.46942 18.61 8.21998L9.41002 17.41C9.03473 17.7853 8.52574 17.9961 7.99502 17.9961C7.46429 17.9961 6.9553 17.7853 6.58002 17.41C6.20473 17.0347 5.9939 16.5257 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.09998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </label>
            </div>
            <input @change="handleChangeDate" class="input date" type="date" :value="stockDate">
            <button class="btn">Добавить</button>
        </form>
        <div class="preview">
            <label class="form__label">Превью</label>
                <div class="stock__item">
                    <div class="stock__image">
                        <img v-if="stockImage" :src="stockImage" />
                        <img v-else src="@/assets/images/stock-kombo.svg" />
                    </div>
                    <div class="stock__description">
                        <div class="stock__header">
                            <div v-if="stockTitle" class="stock__title">{{stockTitle}}</div>
                            <div v-else class="stock__title">Без мяса? Здесь!</div>
                        </div>
                        <div v-if="stockDescription" class="stock__subtitle">
                            {{stockDescription}}
                        </div>
                        <div v-else class="stock__subtitle">Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!
                        </div>
                        
                        <div class="stock__footer">
                            <div class="stock__data">{{stockDate}}</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()


        const stockImage = ref("")
        const stockDescription = ref("")
        const stockTitle = ref("")
        const stockDate = ref("2022-07-22")

        const handleSubmit = () => {
            const data = {
                title: stockTitle.value,
                description: stockDescription.value,
                imageURL: stockImage.value,
                date: stockDate.value
            }
           store.dispatch("addPromotion", data)
        }

        const handleChangeDate = (e) => {
            stockDate.value = e.target.value
        }

        const handleChange = (e) => {
           const files = e.target.files
           createImage(files[0])
        }
        const createImage = (file) => {
            let image = new Image()
            let reader = new FileReader();
            reader.onload = (e) => {
                stockImage.value = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        return{
            handleChange,
            handleSubmit,
            stockImage,
            stockDescription,
            stockTitle,
            stockDate,
            handleChangeDate
        }
    }
}
</script>

<style lang="scss" scoped>
.form__label {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin: 40px 0 5px;
}
.admin__add-promotion{
    .input {
        background: linear-gradient(90deg, #5B5B5B 0%, #645F5F 100%);
        border-radius: 25px;
        width: 400px;
        height: 50px;
        padding: 7px 15px;
    }
    .add__file {
        margin: 20px 0;
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
    margin-left: 80px;
    display: flex;
    form{
        display: flex;
        flex-direction: column;

        .date{
            max-width: 200px;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
        .btn{
            max-width: 150px;
        }
    }
    .preview{
        margin-top: 40px;
        margin-left: 40px;
        width: 30%;
        .stock__item{
            width: 100%;
            margin-top: 25px;

            .stock__subtitle{
                // width: 100px;
            }
        }
    }
}
</style>