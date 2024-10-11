<template>
    <div class="message-wall-index">
        <TopBar></TopBar>
        <!-- <video src="../assets/video/bg.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video> -->
        <!-- <router-view></router-view> -->
        <FooterBar2></FooterBar2>
    </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue';
import FooterBar2 from '@/components/FooterBar2.vue';

</script>

<style lang="less">

.message-wall-index {
    .bg-video {
        height: 50vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
}

</style>