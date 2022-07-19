<template>
    <div class="admin__home">
        <h1 class="admin__title">Это админ панель, здесь вы можете упавлять сайтом</h1>
        <p class="admin__subtitle">Для начало работы выберите один из элементов в панели управления.</p>
        <img src="@/assets/images/admin-image.png" alt="">
        <div class="buttons">
            <button class="btn">Вернуться назад</button>
            <button class="btn">Начать</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.admin {

    &__home {
        width: 100vw;
        // text-align: center;
        height: 710px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    &__title {
        font-style: normal;
        font-weight: 600;
        font-size: 54px;
        line-height: 63px;
        text-align: center;
        max-width: 991px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }

    &__subtitle {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 67px;
    }
}
.buttons {
    display: flex;
    gap: 15px;
    margin-top: 70px;
    .btn {
        padding: 6px 37px;
    }
}

</style>