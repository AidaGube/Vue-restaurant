<template>
    <form class="pay__form">
        <ContactInfo />
        <Delivery />
        <Payment />
        <DeliveryTime />
        <AcceptOrder />
    </form>
</template>

<script>
import ContactInfo from "./ContactInfo"
import Delivery from "./Delivery"
import DeliveryTime from "./DeliveryTime"
import Payment from "./Payment"
import AcceptOrder from "./AcceptOrder"
export default {
    components: {ContactInfo,Delivery,Payment,DeliveryTime,AcceptOrder}
}
</script>

<style lang="scss">
.pay__form{
     display: flex;
     flex-direction: column;
    .pay__section{
        background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 20px;

        &-label{
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
            margin-bottom: 32px;
        }

        @media (max-width: 560px) {
            padding: 30px 25px;
        }
    }
    .selector{
        border-radius: 10px;
        // padding: 19px 0;
        display: flex;
        // justify-content: space-between;
    }
}
.input{
    background: transparent;
    padding: 20px 30px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    outline: none;
    margin: 0 15px 15px 0;
    width: 100%;

    &:last-child{
        margin: 0 0 15px 0;
    }

    &::-webkit-input-placeholder {
        color:#fff;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
    }

    @media (max-width: 560px) {
        padding: 15px 25px;
    }
}
</style>