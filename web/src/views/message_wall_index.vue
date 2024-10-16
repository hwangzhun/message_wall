<template>
    <div class="message-wall-index">
        <TopBar></TopBar>
        <video src="../assets/video/bg.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video>
        <router-view></router-view>
        <FooterBar2 class="footer-bar" ref="myComponentRef" @updateMessage="handleUpdateMessage"></FooterBar2>
    </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue';
import FooterBar2 from '@/components/FooterBar2.vue';
import { ref } from 'vue'

const message = ref('');

// 处理子组件传递的数据
const handleUpdateMessage = (newMessage) => {
  message.value = newMessage;
};

console.log(message)

</script>

<style lang="less">

.message-wall-index {
    display: flex;
    justify-content: center;

    .bg-video {
        height: 50vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
}

.footer-bar {
    display: flex;
}

</style>