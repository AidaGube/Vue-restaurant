<template>
    <div class="stock__items col-4">
        <div class="stock__item">
          <div class="stock__image">
            <img :src="item.imageURL" />
          </div>
          <div class="stock__description">
            <div class="stock__header">
              <div class="stock__title">{{ item.title }}</div>
            </div>
            <div class="stock__subtitle">
              {{item.description}}
            </div>
            <div class="stock__footer">
              <div class="stock__data">{{item.date}}</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.stock__item{
  width: 100%;
}
.stock__image{
  height: 180px;
  img{
    height: 180px;
    object-fit: cover;
  }
}
</style>