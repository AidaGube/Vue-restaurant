<template>
    <div class="pay__accept pay__section">
        <label>
            <input type="checkbox">
            Я согласен на обработку моих перс. данных в соответствии с Условиями
        </label>
        <Button className="accept-btn" text="Оформить заказ" />
    </div>
</template>

<script>
import Button from "@/components/Buttons/Button"
export default {
    components: {Button}
}
</script>

<style lang="scss">
.pay__accept{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 560px) {
        flex-direction: column;

        .accept-btn{
            width: 100%;
            margin-top: 10px;
        }
    }

    .accept-btn{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        padding: 17px 20px;
    }

    label{
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        cursor: pointer;

        input{
            margin-right: 13px;
        }

        span{
            color: #72A479;
            text-decoration: underline;
        }
    }
}
</style>