import WebIM from "./connection"
import { EAFNOSUPPORT } from "constants";


// demo code below
const connection = new WebIM.connection({
    isMultiLoginSessions: false,
    https: false,
    url: "im-api.easemob.com",
    apiUrl: (location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com',
    isAutoLogin: false,
    heartBeatWait: "",
    autoReconnectNumMax: "",
    autoReconnectInterval: ""
})

connection.listen({
    onOpened: function() {
        connection.setPresence()
    }
})

connection.open({
    apiUrl: (location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com',
    user: "sunylt",
    pwd: "a1b9c8d77",
    //  accessToken: password,
    appKey: "easemob-demo#chatdemoui",
    success(token) {
        // console.log(token)
    },
    error(error) {
        console.log(error)
    }
})

var sendPrivateText = function () {
    var id = connection.getUniqueId();
    var msg = new WebIM.message('txt', id);
    msg.set({
        msg: '12312312',                       // 消息内容;
        to: 'sunylt-b',                          // 接收消息对象;
        roomType: false,
        success: function (id, serverMsgId) {
            alert("Send private text success");
        },
        fail: function () {
            alert("Send private text failed");
        }
    });
    msg.body.chatType = 'singleChat';
    connection.send(msg.body);
};

document.getElementById("sendMessage").addEventListener("click", sendPrivateText)







