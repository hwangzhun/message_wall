<template>
    <div>
        <p class="ab">message_wall.vue</p>
        <p class="aa">text</p>
        <span class="iconfont icon-gou"></span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aaa:'',
        }
    },

    components: {

    },

    computed: {

    },
    created(){

    },
    methods: {
        getUser(){
            this.axios.post({
                data:'aaa',
                pwd:'bbb',
            })
        }
    }
}
</script>

<style lang="less">
.ab{
  font-size: @font-size-30;
  line-height: @line-height-30;
  color: @error-color;
  background: @bg-font;
}

.icon-gou{
    color: @error-color;
    font-size: @font-size-30;
}
</style>