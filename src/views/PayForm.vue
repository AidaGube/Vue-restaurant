<template>
    <div class="wrapper">
        <Header />
        <main>
            <div class="container small pay">
                <div class="go__back">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z" fill="white"/>
                    </svg>
                    Вернуться назад
                </div>
                <Title class="pay__title" title="Оформление заказа" />
                <PayForm />
                
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Title from "@/components/Title/Title"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import PayForm from "@/components/PayForm/PayForm"
export default {
    components: {Title,Header,Footer,PayForm}
}
</script>

<style lang="scss">
.pay{
    padding: 50px 0 90px;
   
    .go__back{
        margin-top: 60px;
    }

    &__title{
        margin: 36px 0 56px;
    }
}
.container.small {
   padding-top: 80px;
     @media (max-width: 670px) {
        padding-top: 150px;
    }
    @media (max-width: 450px) 
     {
    padding-top: 125px;
    }
}
</style>