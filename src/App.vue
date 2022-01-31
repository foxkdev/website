<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
.page{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
</style>
