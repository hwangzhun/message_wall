// 引入 mock
var Mock = require('mockjs')

// 留言数据
export const cardData = Mock.mock({
    "data|13": [{
        "date_value": new Date(),
        "id": 1,
        "user_id|+1": 10,
        "message_content|24-96": "@cword",
        "message_label|0-10": 0,
        "user_name": "@cname",
        "like_num|0-120": 0,
        "comment|0-120": 0,
        "cardColor|0-4": 0,
        "img_url|0-4": 0,
        "revoke|0-20": 0,
        "report|0-20": 0,
        "type": 0,
    }]
})

// 照片
export const photo = Mock.mock({
    "data|50":[{
        // 创建时间
        "moment": new Date(),

        // id
        "id": 1,

        // userid
        "userId|+1":10,

        // 内容
        "message|24-96":"@cword",

        // 标签
        "label|0-10":0,

        // 用户名
        "name":"@cname",

        // 喜欢
        "like|0-120":0,

        // 评论
        "comment|0-120":0,

        //背景颜色
        "imgurl|0-19":0,

        // 是否撤销留言
        "revoke|0-20":0,

        // 举报
        "report|0-20":0,

        // 类型
        "type":1,
    }]
})

// 留言评论
export const comment = Mock.mock({
    "data|19":[{
        // 创建时间
        "moment": new Date(),

        // id
        "id|+1": 1,

        // userid
        "userId|+1":10,

        // 内容
        "message|24-96":"@cword",

        // 用户名
        "name":"@cname",

        //头像颜色
        "imgurl|0-13":0,
    }]
})