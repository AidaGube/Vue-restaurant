<template>
    <GoogleMap
    api-key="AIzaSyCuxGOMcJKZ80Hd-Xci6adMkjzbYgKuZic"
    style="width: 100%; height: 400px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 55.76070917582561, lng: 37.23099577465705 };

    return { center };
  },
});
</script>

<style lang="scss"  >

@media (max-width:726px){
  .delivery__map{
        margin-bottom:40px;
        width:100%;
  }
       
}
</style>