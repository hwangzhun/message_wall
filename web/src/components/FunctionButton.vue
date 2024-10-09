<template>
  <button :class="[size,color]" class="button-main">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    size:{
      default:'base',
    },
    color:{
      default:'primary',
    }
  }
}
</script>

<style lang="less" scoped>

.button-main{
  text-align: center;
  border: none;
}

.max{
  min-width: 100px;
  height: 100px;
  border-radius: 24px;
  padding: 0 20px;
}

.base{
  min-width: 80px;
  height: 36px;
  border-radius: 24px;
  padding: 0 20px;
}

.small{
  min-width: 72px;
  height: 32px;
  border-radius: 24px;
  padding: 0 20px;
}

.ext-small{
  min-width: 50px;
  height: 30px;
  border-radius: 15px;
  padding: 0 12px;
  font-size:  @font-size-14;
}

.primary{
  background: @gray-12;
  color: @gray-2;
}

.secondary{
  background: @gray-2;
  color: @gray-12;
  border: 1px solid @gray-2;
}

.primary-main{
  background: @primary-color;
  color: @gray-1;
  font-weight: @semibold;
}

.secondary-main{
  background: @gray-1;
  color: @gray-10;
  font-weight: @semibold;
}

</style>
