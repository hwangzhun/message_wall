<template>
    <div class="topbar">
        <div class="logo">
            <svg class="logo-icon icon" aria-hidden="true">
                <use xlink:href="#icon-crown"></use>
            </svg>
            <p class="logo-name">留言墙</p>
        </div>
        <div class="menu">
            <FunctionButton :size="buttonSize" :color="buttonColor" style="margin-right: 20px">留言墙</FunctionButton>
            <FunctionButton :size="buttonSize" :color="buttonColor">照片墙</FunctionButton>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import FunctionButton from '@/components/FunctionButton.vue';

// 定义 refs
const windowWidth = ref(window.innerWidth);
const buttonSize = ref('base');
const buttonColor = ref('secondary');

// 从 CSS 获取断点值，并转换为数值
const smallMobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--small-mobile').trim(), 10);
const mobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile').trim(), 10);
const tablet = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tablet').trim(), 10);
const pad = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pad').trim(), 10);
const desktop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--desktop').trim(), 10);

// 监听窗口尺寸变化
const handleResize = () => {
    windowWidth.value = window.innerWidth;

    // 根据窗口宽度调整 buttonSize 和 buttonColor
    if (windowWidth.value <= smallMobile) {
        buttonSize.value = 'ext-small';
        buttonColor.value = 'primary-main';
        // console.log('当前视口宽度: ' + window.innerWidth + 'px' + ' smallMobile')
    } else if (windowWidth.value > smallMobile && windowWidth.value <= mobile) {
        buttonSize.value = 'small';
        buttonColor.value = 'primary-main';
        // console.log('当前视口宽度: ' + window.innerWidth + 'px' + ' Mobile')
    } else if (windowWidth.value > mobile && windowWidth.value <= tablet) {
        buttonSize.value = 'base';
        buttonColor.value = 'primary-main';
        // console.log('当前视口宽度: ' + window.innerWidth + 'px' + ' tablet')
    } else if (windowWidth.value > tablet && windowWidth.value <= pad) {
        buttonSize.value = 'base';
        buttonColor.value = 'primary-main';
        // console.log('当前视口宽度: ' + window.innerWidth + 'px' + ' pad')
    } else if (windowWidth.value > pad && windowWidth.value <= desktop) {
        buttonSize.value = 'base';
        buttonColor.value = 'primary-main';
        // console.log('当前视口宽度: ' + window.innerWidth + 'px' + ' desktop')
    } else {
        buttonSize.value = 'base';
        buttonColor.value = 'primary-main';
    }

};

// 绑定窗口大小变化的事件监听器
onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化时调用一次
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style lang="less" scoped>

.topbar{
    width: 100%;
    height: 52px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-icon {
    font-size: @font-size-24;
    color: @gray-9;
    transition: @transition-1;

    &:hover {
        color: @primary-color;
        transition: @transition-1;
    }
}

.logo-name {
    font-size: @font-size-16;
    color: @l1-text;
    font-weight: @semibold;
    padding-left: @space-8;
}

.menu {
    flex-grow: 1; 
    display: flex; 
    justify-content: center;
}
    
.user-head{
    border-radius: 50%;
    height: 36px;
    width: 36px;
    background-color: @primary-color;
}

// @media (max-width: @mobile) {
//     .topbar{
//     top: auto;
//     bottom: 0;
//     position: fixed;
//     }

//     .logo{
//         width: fit-content;

//         .logo-name {
//         display: none;
//         }
//     }
// }

</style>