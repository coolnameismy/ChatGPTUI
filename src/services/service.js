

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
    {id:'4',theme:'movie suggestion long',model:'GPT-4.0',messages:[
        {user:"I'm bored."},{assistant:"You can watch a comedy movie."},
        {user:"recommend comedy movie for me "},{assistant:`
        1. “Superbad” - A coming-of-age comedy about two high school best friends on a quest to lose their virginity before college.
        2. “Bridesmaids” - A maid of honor’s life unravels as she leads her best friend and a group of colorful bridesmaids on a wild ride down the road to matrimony.
        3. “The Hangover” - After a wild night in Las Vegas, three friends try to retrace their steps in order to find their missing friend.
        4. “Ferris Bueller’s Day Off” - A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.
        5. “Zoolander” - At the end of his career, a clueless model is brainwashed to kill the Prime Minister of Malaysia.
        6. “Anchorman: The Legend of Ron Burgundy” - Ron Burgundy is San Diego’s top-rated newsman in the male-dominated broadcasting of the 1970s, but that’s all about to change.
        7. “Knocked Up” - For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she’s pregnant with his child.
        
        Remember, humor is subjective. What someone might find hilarious, someone else might not. Enjoy your movie time!
        `},
        {user:"which one is best, why ? "},{assistant:`
        It’s really hard to determine the “best” comedy movie as it can be very subjective and depends on individual’s taste of humour. However, I can give you some insights why some might stand out more than others:

        • “Superbad” is often praised for its hilarious dialogue and memorable performances by Jonah Hill and Michael Cera.
        • “Bridesmaids” was a critical and box office success. It beautifully balances comedy with emotion and has a cast filled with comic heavyweights.
        • “The Hangover” is popular for its outrageous humor and unpredictable plot.
        • “Ferris Bueller’s Day Off” is a classic 80’s comedy loved for its charm and Matthew Broderick’s unforgettable performance.
        • “Zoolander” showcases Ben Stiller’s comedic talents and presents a ridiculous but hilarious take on the fashion industry.
        • “Anchorman: The Legend of Ron Burgundy” has achieved cult status over the years due to its eccentric humor and iconic lines.
        • “Knocked Up” is a mix of raunchy humor and heartwarming moments, with well-developed characters.

        While they all are great in their own right, you might choose “Bridesmaids” if you prefer a comedy with more emotional depth. “The Hangover” would be a solid pick if you’re a fan of more slapstick and outlandish humor. However, if you love classic comedies, “Ferris Bueller’s Day Off” might be the one for you. I would suggest reading more about each movie and pick one that suits your comedy preference.
        `},
        {user:"I'm bored."},{assistant:"You can watch a comedy movie."},
        {user:"I'm bored."},{assistant:"You can watch a comedy movie."}
    ]},
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