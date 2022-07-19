<template>
  <div class="container">
    <section class="delivery">
      <div class="delivery__wrap">
        <div class="delivery__time">
          <p class="delivery__time_title">График работы доставки:</p>
          <span>с 10:00-21:00</span>
        </div>
        <div class="cafe__time">
          <p class="delivery__time_title">График работы кафе:</p>
          <span>с 08:00-21:00</span>
        </div>
      </div>
      <p class="delivery__order">Минимальный заказ:</p>
      <p class="delivery__text">
        Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ Доставка
        оператором такси от любой суммы заказа - по тарифам перевозчика.
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.delivery {
  &__time {
    margin-right: 100px;
  }
  &__wrap {
    display: flex;
    margin: 30px 0 40px 0;
  }
  &__order {
    margin-bottom: 10px;
  }
  &__text {
    max-width: 695px;
    max-height: 105px;
    margin-bottom: 40px;
  }
  &__order,
  &__text {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 35px;
    color: #cfcfcf;
  }

  .delivery__time_title {
    color: #cfcfcf;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
  }
  .delivery__time,
  .cafe__time span {
    color: #cfcfcf;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
  }
}
@media (max-width: 726px) {
  .delivery {
    &__wrap {
      display: flex;
      flex-direction: column;
    }
    &__text {
      margin-bottom: 40px;
    }
    &__row {
      margin-bottom: 15px;
    }
    &__order,
    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
    }
    &__time_title {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  }
}
@media (max-width: 726px) {
  .delivery__text {
    margin-bottom: 40px;
  }
}
</style>