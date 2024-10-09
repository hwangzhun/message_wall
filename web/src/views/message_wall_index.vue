<template>
    <div class="message-wall-index">
        <top-bar></top-bar>
        <video src="../assets/video/bg.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video>
        <router-view></router-view>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
    data() {
        return {
            aaa: '',
        }
    },

    components: {
        TopBar,
    },

    computed: {

    },
    created() {

    },
    methods: {

    }
}
</script>

<style lang="less">

.message-wall-index {
    .bg-video {
        height: 50vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
    }
}

</style>