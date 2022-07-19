<template>
    <div class="sceleton">
        <div class="sceleton__image"></div>
        <div class="sceleton__description">
            <div class="sceleton__header">
                <div class="sceleton__title"></div>
                <div class="sceleton__weight"></div>
            </div>
            <div class="sceleton__subtitle"></div>
            <div class="sceleton__footer">
                <div class="sceleton__price"></div>
                <div class="sceleton__button"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sceleton {
    background: #504B4A;
    border-radius: 10px;
    width: 330px;
    height: 385px;
    margin-left: 15px;
    &__image {
        width: 330px;
        height: 230px;
        background: #5B5858;
        border-radius: 10px 10px 0px 0px;
    }

    &__description {
        padding: 15px;
        display: flex;
        flex-direction: column;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
    }

    &__title {
        background: #5B5858;
        border-radius: 5px;
        width: 205px;
        height: 20px;
    }

    &__weight {
        background: #5B5858;
        border-radius: 5px;
        width: 75px;
        height: 20px;
    }

    &__subtitle {
        width: 250px;
        height: 40px;
        margin-bottom: 15px;
        background: #5B5858;
        border-radius: 5px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__price {
        width: 75px;
        height: 25px;
        background: #5B5858;
        border-radius: 5px;
    }

    &__button {
        width: 137px;
        height: 44px;
        background: #5B5858;
        border-radius: 5px;
    }
}

</style>