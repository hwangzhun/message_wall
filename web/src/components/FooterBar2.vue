<template>
    <footer ref="getFooter">
        <div class="container">
            <div class="main-footer">
                <div class="profile">
                    <div class="logo-area">
                        <svg class="logo-icon icon" aria-hidden="true">
                            <use xlink:href="#icon-crown"></use>
                        </svg>
                        <span class="logo-name">留言墙</span>
                        <button id="dark-mode" class="moon"><i class='bx bxs-moon bx-tada-hover' ></i></button>
                        <button id="light-mode" class="sun hide"><i class='bx bxs-sun bx-tada-hover' ></i></button>
                    </div>
                    <div class="desc-area">
                        <p>一刻时光是本人独自开发的，为便于与用户交流的留言平台。</p>
                        <p>用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p>
                    </div>
                    <div class="social-medie">
                        <a href="#"><i class='bx bxl-facebook-square'></i></a>
                        <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                        <a href="#"><i class='bx bxl-twitter' ></i></a>
                        <a href="#"><i class='bx bxs-file-blank' ></i></a>
                    </div>
                </div>
                <div class="service-area">
                    <ul class="service-header">
                        <li class="service-name">Services</li>
                        <li><a href="#">Google</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>
                <div class="industry-area">
                    <ul class="service-header">
                        <li class="service-name">industries</li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">Public Sector</a></li>
                        <li><a href="#">Smart Office</a></li>
                        <li><a href="#">Retail</a></li>
                    </ul>
                </div>
                <div class="company-area">
                    <ul class="service-header">
                        <li class="service-name">Company</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Join Us</a></li>
                    </ul>

                    <input v-model="footerDate" @input="updateParentMessage" placeholder="Type a message" />

                </div>
            </div>
            <hr>
            <div class="footer-buttom">
                <div class="copy-right">
                    <i class='bx bxs-copyright' ></i>
                    <span>2024 HWANGZHUN</span>
                </div>
                <div class="term">
                    <a href="#">Term For Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';


const footerDate = ref('我是 footerDate')

const emit = defineEmits(['footerDate']);

const updateParentMessage = () => {
  emit('updateMessage', footerDate.value);
};

</script>

<style lang="less" scoped>
footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: @gray-1;
    box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0 0;
    transition: background 0.3s linear;
}

.container {
    max-width: 1340px;
    padding: 30px 40px;
    margin: auto;
}

.main-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.profile .logo-area {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
}

.logo-icon {
    font-size: @font-size-24;
}

.logo-name {
    font-size: 1.5rem;
    font-weight: @semibold;
    margin: 0 1rem;
}

.logo-area button {
    border: none;
    outline: none;
    font-weight: @semibold;
    background-color: transparent;
    cursor: pointer;
}

.logo-area button i {
    font-size: @font-size-20;
}

.logo-area .sun {
    color: var(--white-color);
}

.desc-area {
    max-width: 420px;
    margin-bottom: 1.25rem;
}

.desc-area p {
    color: @gray-7;
    font-weight: @regular;
}

.social-medie{
    margin-bottom: 1.25rem;
}

.social-medie i {
    color: @gray-7;
    font-weight: @regular;
    font-size: @font-size-20;
    margin-right: @space-24;

    &:hover {
        color: @primary-color;
    }
}

.service-header {
    margin-right: 40px;
}

li.service-name {
    font-weight: @semibold;
    color: @gray-13;
}

.service-header li a {
    color: @gray-7;
    font-weight: @regular;

    &:hover {
        color: @primary-color;
    }
}

.service-header li {
    margin-bottom: 10px;
}

hr {
    height: 1px;
    border: none;
    background-color: @gray-7;
    margin-bottom: 1rem;
}

.footer-buttom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
}

.copy-right {
    color: @gray-7;
    display: flex;
    align-items: center;
}

.copy-right i {
    margin-right: @space-8;
}

.copy-right span {
    font-weight: @regular;
    letter-spacing: 0.1rem;
}

.term a {
    color: @gray-7;
    margin-right: 1.5rem;

    &:hover {
        color: @primary-color;
    }
}

@media screen and (max-width: @tablet){
    .main-footer {
        flex-wrap: wrap;
        justify-content: left;
    }

    .service-area {
        flex-wrap: wrap;
        justify-content: left;
    }

    .service-header {
        margin-left: 0;
        margin-right: 40px;
    }

    .social-medie {
        margin-bottom: 1rem;
    }

}

@media screen and (max-width: @mobile){
    .service-header {
        margin-bottom: 8px;
    }
    
    .copy-right {
        margin-bottom: 8px;
    }

    .footer-buttom {
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
