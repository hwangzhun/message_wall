<template>
    <div class="topbar">
        <div class="logo">
            <svg class="logo-icon icon" aria-hidden="true">
                <use xlink:href="#icon-crown"></use>
            </svg>
            <p class="logo-name">留言墙</p>
        </div>
        <div class="menu">
            <Function-Button size="ext-small" color="primary-main" style="margin-right: 20px">留言墙</Function-Button>
            <Function-Button size="ext-small" color="primary-main">照片墙</Function-Button>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>
    </div>
</template>

<script>
import FunctionButton from './FunctionButton.vue';

export default {
    components: {
        FunctionButton,
    }
}
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

    .logo {
        display: flex;
        align-items: center;
        width: 100px;

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
            font-size: @font-size-20;
            color: @l1-text;
            font-weight: @medium;
            padding-left: @space-8;
        }
    }

    .user {
        width: 100px;

        .user-head{
            border-radius: 50%;
            height: 36px;
            width: 36px;
            background-color: @primary-color;
            float: right;
        }
    }
}

@media (max-width: @mobile) {
    .topbar{
    top: auto;
    bottom: 0;
    position: fixed;
    }

    .logo{
        width: auto;
    }

    .logo-name {
        display: none;
    }
}

</style>