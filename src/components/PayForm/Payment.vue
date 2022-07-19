<template>
    <div class="pay__payment pay__section">
        <p class="pay__section-label">3. Оплатить</p>
        <div class="selector">
            <SelectorCheckbox 
                v-for="(item,index) in selectorItems" 
                :key="item" 
                :checkboxItem="item"
                :class="{active: activeSelectorItem === index}"
                @click="handleactiveSelector(index)"
            />
        </div>
        <input v-if="true ? activeSelectorItem === 2 : false" type="text" placeholder="Сдача с" class="input">
    </div>
</template>

<script>
import SelectorCheckbox from "@/components/Inputs/SelectroCheckbox"
import { ref } from '@vue/reactivity'
export default {
    components: {SelectorCheckbox},
    setup() {
        const selectorItems = ["Онлайн","Картой","Наличными",]
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
.pay__payment{
    .selector{
        margin-bottom: 15px;
    }
    .input{
        width: auto;
    }
}
</style>