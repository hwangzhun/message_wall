<template>
  <router-view></router-view>
  <div>
    <p class="aa">aaaaaa</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="less" scoped>
@import './assets/fonts/iconfont/iconfont.css';

div{
  border: #000 1px solid;
  padding: @space-12;
  margin: @space-12;
  background: @gray-5;
}

.aa{
  font-size: @font-size-30;
  line-height: @line-height-30;
  color: @error-color;
}

</style>
