<template>
    <div class="pay__delivery-time pay__section">
        <p class="pay__section-label">4. Когда доставить</p>
        <div class="pay__delivery_time-select">
            <div class="selector">
                <SelectorCheckbox 
                    v-for="(item,index) in selectorItems" 
                    :key="item" 
                    :checkboxItem="item"
                    :class="{active: activeSelectorItem === index}"
                    @click="handleactiveSelector(index)"
                />
            </div>
            <input type="text" placeholder="Укажите время" class="input">
        </div>
        <div class="counter">
            Кол-во персон
            <div class="person__counter">
                <svg @click="handleIncrementCounter" class="counter-btn" width="14" height="14" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="14" height="2" fill="white"/>
                </svg>
                <span>{{productCount}}</span>
                <svg @click="handleDecrementCounter" class="counter-btn" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="6" width="14" height="2" fill="white"/>
                    <rect x="8" width="14" height="2" transform="rotate(90 8 0)" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import SelectorCheckbox from "@/components/Inputs/SelectroCheckbox"
import { ref } from '@vue/reactivity'
export default {
    components: {SelectorCheckbox},
    setup() {
        const selectorItems = ["В ближайшее время","Ко времени"]
        const activeSelectorItem = ref(0)
        const productCount = ref(1)

        const handleDecrementCounter = () => {
           productCount.value++
        }
        const handleIncrementCounter = () => {
            if (productCount.value <= 1) {
                return
            }
            productCount.value--
        }

        const handleactiveSelector = (index) => {
           activeSelectorItem.value = index
        }


        return{
            selectorItems,
            activeSelectorItem,
            handleactiveSelector,
            productCount,
            handleIncrementCounter,
            handleDecrementCounter
        }
    }
}
</script>

<style lang="scss">
.pay__delivery-time{
    .pay__delivery_time-select{
        display: flex;
        align-items: center;
        gap: 15px;
    
        .input{
            width: auto;
            margin: 0;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    .counter{
        width: auto;
        padding: 20px 20px 20px 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        max-width: 300px;
        margin-top: 20px;

        .person__counter{
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .counter-btn{
            cursor: pointer;
        }

        @media (max-width: 560px) {
            padding: 15px 15px 15px 25px;
        }
    }

}
</style>