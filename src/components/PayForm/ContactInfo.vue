<template>
    <div class="pay__contacts pay__section">
        <p class="pay__section-label">1. Контактная информация</p>
        <div class="pay__contacts-form">
            <input type="text" placeholder="Имя*" class="input">
            <input type="text" placeholder="Телефон*" class="input">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.pay__contacts-form{
    display: flex;
    @media (max-width: 560px) {
        flex-direction: column;
    }
}
</style>