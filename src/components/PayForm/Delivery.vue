<template>
    <div class="pay__delivery pay__section">
        <p class="pay__section-label">2. Доставка</p>
        <div class="pay__delivery-select">
            <div class="selector">
                <SelectorCheckbox 
                    v-for="(item,index) in selectorItems" 
                    :key="item" 
                    :checkboxItem="item"
                    :class="{active: activeSelectorItem === index}"
                    @click="handleactiveSelector(index)"
                />
            </div>
            <div class="delivery__text">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_922)">
                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="white"/>
                    <path d="M8.00016 2.66663C7.63216 2.66663 7.3335 2.96529 7.3335 3.33329V7.99996C7.3335 8.36796 7.63216 8.66663 8.00016 8.66663H11.3335C11.7015 8.66663 12.0002 8.36796 12.0002 7.99996C12.0002 7.63196 11.7015 7.33329 11.3335 7.33329H8.66683V3.33329C8.66683 2.96529 8.36816 2.66663 8.00016 2.66663Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_63_922">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                Доставим через  1 час 30 минут
            </div>
        </div>
        <div v-if="activeSelectorItem === 0" class="pay__delivery-adress">
            <p class="pay__section-label">Адрес доставки</p>
            <div class="floor first">
                <input type="text" placeholder="Укажите улицу*" class="input">
                <input type="text" placeholder="Номер дома*" class="input">
            </div>
            <div class="floor second">
                <input type="text" placeholder="№ квартиры/офиса" class="input">
                <input type="text" placeholder="Подъезд" class="input">
                <input type="text" placeholder="Этаж" class="input">
            </div>
            <div class="floor third">
                <input type="text" placeholder="Комментарий" class="input">
            </div>
        </div>
        <div v-else class="">

        </div>
    </div>
</template>

<script>
import SelectorCheckbox from "@/components/Inputs/SelectroCheckbox"
import { ref } from '@vue/reactivity'
export default {
    components: {SelectorCheckbox},
    setup() {
        const selectorItems = ["Доставка","Самовывоз"]
        const activeSelectorItem = ref(0)

        const handleactiveSelector = (index) => {
           activeSelectorItem.value = index
        }


        return{
            selectorItems,
            activeSelectorItem,
            handleactiveSelector
        }
    }
}
</script>

<style lang="scss">
.pay__delivery-select{
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 30px;

    .delivery__text{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        gap: 10px;

        @media (max-width: 700px) {
            display: none;
        }
    }
}
.pay__delivery-adress{
    max-width: 600px;
    
    .pay__section-label{
        font-size: 16px !important;
    }
    .floor{
        display: flex;

        @media (max-width: 560px) {
            flex-direction: column;
        }
    }
}
</style>