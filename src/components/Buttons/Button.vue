<template>
    <button class="btn" :class="{[className] : className }">
    {{ text }}
  </button>
</template>

<script>
export default {
props: ["text","className"]
}
</script>

<style lang="scss">
// .btn {
//   background: #618967;
//   border-radius: 10px;
//   padding: 10px 16px;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background: #5c8362;
//   }

//   &:active {
//     transform: translateY(1px);
//   }

//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 17px;
//   color: #ffffff;
// }
.btn-gray {
  background: #2E2B2C;
  border-radius: 10px;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
</style>