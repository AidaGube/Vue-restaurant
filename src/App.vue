<template>
  <router-view/>
  <router-link to="/admin" v-if="showAdminBtn" class="btn admin__btn">
    <img :src="shieldIcon" alt="">
  </router-link>
  <router-link to="/" v-if="showAdminBtn" class="btn admin__btn home">
    <!-- <img :src="shieldIcon" alt=""> --> Home
  </router-link>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
import {user} from "./composables/useUser"
import shieldIcon from "./assets/images/shield.svg"
export default {
  setup() {

      const showAdminBtn = ref(false)
      watchEffect(() => {
        if (user.value) {
          if (user.value.email === "ag@mail.ru") {
            showAdminBtn.value = true
          }
        }else{
          showAdminBtn.value = false
        }
      })
      return{
        showAdminBtn,
        shieldIcon
      }
      
  },
}
</script>


<style lang="scss">
@import "@/assets/scss/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%) no-repeat;
  // padding-top: 100px;
  &._blocked {
    overflow: hidden;
  }

  &.welcome {
    height: 100vh;
    body {
      overflow-y: hidden;
    }
  }
}
.admin__btn{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.home{
    right: 80px;
  }
}

</style>