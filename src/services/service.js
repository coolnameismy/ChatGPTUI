

// 获取用户信息
export function fetchUserInfo(){
    return {
        code:200,
        data:{
            name:'刘大王',
            pic:'./svg/usericon.webp'
        }
    }
}

// 获取对话数据
export async function fetchChatList(){
    const resp = {
        code:200,
        data:{
          chats:mockChatList,
          currIndex:3
        }
    }
    return await req(resp);
}

function req(ret){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(ret);
        }, 1000);
    })
}

const mockChatList = [
    {id:'0',theme:'empty',model:'GPT-3.5',messages:[]},
    {id:'1',theme:'weather',model:'GPT-3.5',messages:[{user:"It's nice outside today."}]},
    {id:'2',theme:'dinner plans',model:'GPT-4.0',messages:[{user:"What should I cook tonight?"},{assistant:"How about pizza?"}]},
    {id:'3',theme:'homework help',model:'GPT-3.5',messages:[{user:"Math problem 5 is tough."},{assistant:"Do you want a hint?"}]},
    {id:'4',theme:'movie suggestion',model:'GPT-4.0',messages:[{user:"I'm bored."},{assistant:"You can watch a comedy movie."}]},
    {id:'5',theme:'fitness advice',model:'GPT-3.5', messages:[{user:"I want to lose weight."}]},
    {id:'6',theme:'song recommendations',model:'GPT-4.0', messages:[{user:"What songs are popular now?"},{assistant:"How about 'Good 4 u'?"}]},
    {id:'7',theme:'travel recommendation',model:'GPT-3.5',messages:[{user:"I want to go on vacation."},{assistant:"How about Paris?"},{user:"What's there to do in Paris?"}]},
    {id:'8',theme:'book suggestions',model:'GPT-4.0', messages:[{user:"What books do you recommend?"}]},
    {id:'9',theme:'cooking tips',model:'GPT-3.5', messages:[{user:"I'm making spaghetti."},{assistant:"Add some garlic for flavor."}]},
    {id:'10',theme:'learning languages',model:'GPT-4.0', messages:[{user:"How can I practice English?"},{assistant:"Try reading English books."}]},
    {id:'11',theme:'tech reviews',model:'GPT-3.5', messages:[{user:"Is iPhone 12 good?"},{assistant:"It has great features."}]},
    {id:'12',theme:'music theory',model:'GPT-4.0', messages:[{user:"What is a chord?"},{assistant:"A chord is a group of notes."}]},
    {id:'13',theme:'financial advice',model:'GPT-3.5', messages:[{user:"I want to invest."},{assistant:"Study the market trends first."}]},
    {id:'14',theme:'latest news',model:'GPT-4.0', messages:[{user:"What's the latest news?"},{assistant:"There's news about the election."}]},
    {id:'15',theme:'makeup tips',model:'GPT-3.5', messages:[{user:"How to apply eyeliner?"},{assistant:"Start from the inner corner."}]},
    {id:'16',theme:'house cleaning',model:'GPT-4.0', messages:[{user:"What's a quick way to clean?"},{assistant:"Have a plan and use the right tools."}]},
    {id:'17',theme:'car maintenance',model:'GPT-3.5', messages:[{user:"How often to change oil?"},{assistant:"Every 3000 to 5000 miles."}]},
    {id:'18',theme:'plant care',model:'GPT-4.0', messages:[{user:"My plant is dying."},{assistant:"Check its sunlight and water needs."}]},
    {id:'19',theme:'pet care',model:'GPT-3.5', messages:[{user:"My dog is not eating."},{assistant:"Maybe he's feeling unwell."}]},
    {id:'20',theme:'career advice',model:'GPT-4.0', messages:[{user:"I want a career change."},{assistant:"Consider your interests and skills."}]}
]