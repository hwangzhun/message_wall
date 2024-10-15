<template>
    <main class="message-wall">
        <div class="message-wall-title">
                <p class="title">{{ wallType[id].name}}</p>
                <p class="slogan">{{ wallType[id].slogan}}</p>
        </div>
        <div class="wall-label">
            <span class="label-list" :class="{ 'label-list-active':labelActive==-1 }" @click="labelSelectNode(-1)">全部</span>
            <span class="label-list" v-for="(e,index) in wallLabel[id]" :key="index" :class="{ 'label-list-active':labelActive==index }" @click="labelSelectNode(index)">{{ e }}</span>
        </div> 
        <div class="message-card-list">
            <MessageCard class="message-card" v-for="(e, index) in cardData.data" :key="index"></MessageCard>
        </div>
    </main>


</template>

<script setup>
import { ref } from 'vue';
import { wallType,wallLabel } from '@/utils/data';
import MessageCard from '@/components/MessageCard.vue';
import { cardData } from '../../mock/index'

const id = ref(0);  // 定义 id 为响应式变量
const labelActive = ref(-1);

// console.log(cardData)

// 定义切换 label 选中的方法
const labelSelectNode = (e) => labelActive.value = e;  // 将选中的标签值更新为 e

</script>

<style lang="less" scoped>
// * {
//     border: 1px #000 solid;
//     box-sizing: border-box;
// }

main {
    min-height: 780px;
    margin-top: 52px;
    text-align: center;
}

.message-wall-title {
    margin: 48px 0 20px 0;
}

.title  {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: @semibold;
    color: @gray-11;
    margin-bottom: 30px;
}

.slogan {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: @regular;
    color: @gray-7;
}

.wall-label {
    display: flex;
    justify-content: center;
}

.label-list {
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: @medium;
    color: @gray-7;
    margin-right: 20px;
    box-sizing: border-box;
    padding: 4px 10px;
    transition: @transition-1;
    border: 1px rgba(0, 0, 0, 0) solid;
    border-radius: 2rem;

    &:hover {
    color: @gray-13;
    border: 1px #000 solid;
    border-radius: 2rem;
    transition: @transition-1;
    }
}

.label-list-active {
    color: @gray-13;
    border: 1px #000 solid;
    border-radius: 2rem;
    transition: @transition-1;
    }

.message-card-list {
    display: flex;
    align-content: flex-start;
    flex-wrap:wrap;
}

.message-card {
    margin: @space-12;
}

</style>


