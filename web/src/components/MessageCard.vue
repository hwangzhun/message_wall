<template>
  <div class="main" :style="{ width:props.cardWidth,background:cardColor }">
    <div class="card-top">
      <span class="date">2022.03.02</span>
      <span class="label">留言</span>
    </div>
    <div class="card-message">
      <p>经得住考验的信仰不会那么容易坍塌的。容易坍塌的就不是信仰了，所谓的信仰就是他坍塌了还是会找个种支柱去把它撑起来。</p>
    </div>
    <div class="card-footer">
      <div class="interactive">
          <span class='bx bxs-like'></span>
          <span class="like-num">2</span>
          <span class='bx bxs-message-rounded-dots'></span>
          <span class="message-num">34</span>
      </div>
      <div class="name">
        <span>白居易</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({

  cardWidth: {
    default: '288px'
  },

  cardColor: {
    default: 'rgba(255,227,148,0.3)'
  }

});

</script>

<style lang="less" scoped>

// *{
//   border: 1px #000 solid;
// }

.main{
  height: 240px;
  background-color: @primary-color;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 
  cursor: pointer;
}

.card-top{
  display: flex;
  justify-content: space-between;
  margin-bottom: @space-16;
  color: @gray-7;
}

.card-message {
  height: 140px;
  flex-grow: 1;
}

.card-message p {
  font-size: 1.25rem;
  color: @gray-12;
  text-align: left;
  letter-spacing: 0.2rem;
  font-family: hyppt;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.interactive {
  display: flex;
  justify-content: center;
  align-items:baseline;
  color: @gray-7;
}

.interactive span {
  margin-right: @space-4;
  align-items: center;
}

.bxs-like {
  
  transition: @transition-1;
  
  &:hover{
    color: @warning-color;
    transition: @transition-1;
  }
}

.name {
  color: @gray-11;
  font-size: 1.25rem;
  font-family: hyppt;
}

</style>