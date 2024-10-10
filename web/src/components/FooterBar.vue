<template>
  <div class="footer-bar">
    <div class="footer-bar-main">
        <div class="info">
                <div class="logo">
                    <svg class="logo-icon icon" aria-hidden="true">
                        <use xlink:href="#icon-crown"></use>
                    </svg>
                    <p class="logo-name">留言墙</p>
                </div>
                <div class="info-text">
                    <p>一刻时光是本人独自开发的，为便于与用户交流的留言平台。</p>
                    <p>用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p>
                </div>
                <div class="record">
                    <div class="record-code record-code-1">
                        <P>备案/许可证:</P>
                        <a href="#">粤ICP备00000001号</a>
                    </div>
                    <div class="record-code record-code-2">
                        <P>备案/许可证:</P>
                        <a href="#">粤ICP备00000002号</a>
                    </div>
                </div>
            </div>
            <div class="link">
                <span>链接</span>
                <a href="#">Google</a>
            </div>
            <div class="qrcode">
                <span class="title">打赏</span>
                <div class="qrcode-info">
                    <div class="wx">
                        <img src="../assets/img/wx.png">
                        <span class="qrcode-name">微信</span>
                    </div>
                    <div class="zfb">
                        <img src="../assets/img/wx.png">
                        <span class="qrcode-name">支付宝</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">

div{
    border: 1px #fff solid;
}

a {
    font-size: @font-size-16;
    color: @gray-8;
    transition: @transition-1;
    text-decoration: none; /* 去掉默认的下划线 */
    display: block; /* 如果有多个链接，确保每个链接占据一行 */

    &:hover {
        color: #fff;
        transition: @transition-1;
    }
}

.footer-bar{
    width: auto;
    height: auto;
    background-color: @gray-10;
    padding: 0 12vw;
}

.footer-bar-main {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-top: @space-20;
    padding-bottom: @space-20;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-icon {
    font-size: @font-size-38;
    color: @gray-1;
    transition: @transition-1;
    margin-right: @space-12;

    &:hover {
        color: @primary-color;
        transition: @transition-1;
    }
}

.logo-name  {
    color: #fff;
    font-size: @font-size-24;
}

.title {
    display: block;
    font-size: @font-size-20;
    font-weight: @semibold;
}

.info-text {
    margin-top: @space-12;
    color: @gray-8;
    font-size: @font-size-14;
}

.record {
    display: flex;
    align-items: center;
    margin-top: @space-12;
}

.record-code {
    display: flex;
    align-items: center;
    font-size: @font-size-14;
    color: @gray-8;
}

.record-code p {
        font-size: @font-size-14;
        color: @gray-8;
    }

.record-code-1 {
    margin-right: @space-12;
}

.link {
    color: @gray-8;
    flex-grow: 1; 
}

.link span {
    display: block;
    font-size: @font-size-20;
    font-weight: @semibold;
}

.qrcode {
    display: flex;
    color: @gray-8;
}

.qrcode-info {
    display: flex;
}

.wx img {
    width: 100px;
}

.zfb img {
    width: 100px;
}

.qrcode-name {
    display: block;
}
</style>
