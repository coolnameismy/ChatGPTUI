import { mockChatList, mockMessages} from './data';

// 获取用户信息
export function fetchUserInfo() {
    return {
        code: 200,
        data: {
            name: '刘大王',
            pic: './svg/usericon.webp'
        }
    }
}

// 获取对话数据
export async function fetchChatList() {
    const resp = {
        code: 200,
        data: {
            chats: mockChatList,
            currIndex: mockChatList[Math.floor(Math.random() * mockChatList.length)].id
        }
    }
    return await req(resp);
}


// 对话
export async function fetchChatResp() {
    const resp = {
        code: 200,
        data: mockMessages[Math.floor(Math.random() * mockMessages.length)]
    }
    return await req(resp);
}

function req(ret) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ret);
        }, 1000);
    })
}
