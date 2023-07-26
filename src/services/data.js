export const mockChatList = [
    { id: '0', theme: 'empty', model: 'GPT-3.5', messages: [] },
    {
        id: '1', theme: 'weather', model: 'GPT-3.5', 
        messages: [
            { user: "It's nice outside today." },
            { assistant: "Yes, the weather seems perfect for outdoor activities." },
            { user: "I might go for a walk later." },
            { assistant: "That sounds like a great idea! Enjoy your walk." },
            { user: "Thanks! I'll take some pictures of the beautiful scenery." },
            { assistant: "Awesome! Share the pictures with your friends too." },
            { user: "Definitely will do!" }
        ]
    },
    {
        id: '2', theme: 'dinner plans', model: 'GPT-4.0', 
        messages: [
            { user: "What should I cook tonight?" },
            { assistant: "How about trying a new pasta recipe?" },
            { user: "That sounds delicious! Any specific recommendations?" },
            { assistant: "You can try making creamy garlic parmesan pasta." },
            { user: "I love garlic! I'll give it a shot." },
            { assistant: "Great choice! Let me know how it turns out." },
            { user: "It was amazing! Thanks for the suggestion." },
            { assistant: "You're welcome! Cooking can be fun and rewarding." },
            { user: "Indeed, I might cook more often now." }
        ]
    },
    {
        id: '3', theme: 'homework help', model: 'GPT-3.5', 
        messages: [
            { user: "Math problem 5 is tough." },
            { assistant: "I can help you with that. What's the problem?" },
            { user: "It's a calculus question about limits." },
            { assistant: "Limits can be tricky. Can you state the problem?" },
            { user: "Find the limit of (x^2 - 4) as x approaches 2." },
            { assistant: "Okay. You can use direct substitution. What do you get?" },
            { user: "I got -2 as the result." },
            { assistant: "That's not correct. Try again." },
            { user: "My mistake. It's 0." },
            { assistant: "Exactly! Good job on solving it." },
            { user: "Thanks for your help. I understand it better now." }
        ]
    },
    {
        id: '4', theme: 'movie suggestion long', model: 'GPT-4.0', 
        messages: [
            { user: "I'm bored." }, { assistant: "You can watch a comedy movie." },
            { user: "recommend comedy movie for me " }, {
                assistant: `
                1. “Superbad” - A coming-of-age comedy about two high school best friends on a quest to lose their virginity before college.
                2. “Bridesmaids” - A maid of honor’s life unravels as she leads her best friend and a group of colorful bridesmaids on a wild ride down the road to matrimony.
                3. “The Hangover” - After a wild night in Las Vegas, three friends try to retrace their steps in order to find their missing friend.
                4. “Ferris Bueller’s Day Off” - A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.
                5. “Zoolander” - At the end of his career, a clueless model is brainwashed to kill the Prime Minister of Malaysia.
                6. “Anchorman: The Legend of Ron Burgundy” - Ron Burgundy is San Diego’s top-rated newsman in the male-dominated broadcasting of the 1970s, but that’s all about to change.
                7. “Knocked Up” - For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she’s pregnant with his child.
                
                Remember, humor is subjective. What someone might find hilarious, someone else might not. Enjoy your movie time!
            `},
            { user: "which one is best, why ? " }, {
                assistant: `
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
                { user: "I'm bored." }, { assistant: "You can watch a comedy movie." },
                { user: "I'm bored." }, { assistant: "You can watch a comedy movie." }
        ]
    },
    {
        id: '5', theme: 'fitness advice', model: 'GPT-3.5', 
        messages: [
            { user: "I want to lose weight." },
            { assistant: "That's great! Start by setting achievable fitness goals." },
            { user: "I'm not sure where to begin." },
            { assistant: "You can begin with a balanced diet and regular exercise." },
            { user: "Should I do cardio or strength training?" },
            { assistant: "Both are essential for weight loss. Try a mix of both." },
            { user: "I'll give it a try. Thanks for the advice." },
            { assistant: "You're welcome! Remember to stay consistent and stay motivated." },
            { user: "I'll keep that in mind." },
        ]
    },
    {
        id: '6', theme: 'song recommendations', model: 'GPT-4.0', 
        messages: [
            { user: "What songs are popular now?" },
            { assistant: "One popular song now is 'Driver's License'." },
            { user: "I've heard that one. Any other recommendations?" },
            { assistant: "Sure, you can try listening to 'Montero' by Lil Nas X." },
            { user: "I'll add it to my playlist. Thanks!" },
            { assistant: "You're welcome! Enjoy the music." },
        ]
    },
    {
        id: '7', theme: 'travel recommendation', model: 'GPT-3.5', 
        messages: [
            { user: "I want to go on vacation." },
            { assistant: "How about Paris?" },
            { user: "What's there to do in Paris?" },
            { assistant: "Paris offers iconic landmarks like the Eiffel Tower and Louvre Museum." },
            { user: "Sounds interesting! Are there any good restaurants?" },
            { assistant: "Absolutely! Paris is famous for its delicious French cuisine." },
            { user: "I can't wait to plan my trip. Thanks for the suggestion." },
            { assistant: "You're welcome! Have a fantastic time in Paris." },
            { user: "Merci beaucoup!" }
        ]
    },
    {
        id: '8', theme: 'book suggestions', model: 'GPT-4.0', 
        messages: [
            { user: "What books do you recommend?" },
            { assistant: "If you enjoy fantasy, I recommend 'The Name of the Wind' by Patrick Rothfuss." },
            { user: "I love fantasy! Any other recommendations?" },
            { assistant: "Definitely! You should check out 'Mistborn: The Final Empire' by Brandon Sanderson." },
            { user: "I've heard of Brandon Sanderson. I'll give it a try." },
            { assistant: "Great choice! His writing is fantastic." },
            { user: "Thanks for the suggestions! I'm excited to start reading." },
            { assistant: "You're welcome! Happy reading." },
            { user: "Bye for now." },
        ]
    },
    {
        id: '9', theme: 'cooking tips', model: 'GPT-3.5', 
        messages: [
            { user: "I'm making spaghetti." },
            { assistant: "Adding some garlic will enhance the flavor." },
            { user: "Should I use fresh garlic or garlic powder?" },
            { assistant: "Fresh garlic is the best for authentic flavor, but garlic powder works too." },
            { user: "I'll go with fresh garlic then." },
            { assistant: "Excellent choice! Your spaghetti will taste delicious." },
            { user: "Can't wait to try it! Thanks for the tip." },
            { assistant: "You're welcome! Enjoy your meal." },
            { user: "Goodbye!" },
        ]
    },
    {
        id: '10', theme: 'learning languages', model: 'GPT-4.0', 
        messages: [
            { user: "How can I practice English?" },
            { assistant: "One effective way is to watch English movies or TV shows with subtitles." },
            { user: "That sounds fun! Any other methods to improve my English?" },
            { assistant: "Reading English books and engaging in conversations with native speakers can also help." },
            { user: "I'll give those a try. Thanks for the advice." },
            { assistant: "You're welcome! Learning a language can be a rewarding experience." },
            { user: "I'm excited to become fluent in English." },
            { assistant: "Keep practicing, and you'll get there! Best of luck." },
            { user: "Thank you! Goodbye!" },
        ]
    },
    {
        id: '11', theme: 'tech reviews', model: 'GPT-3.5', 
        messages:[
            { user: "Is iPhone 12 good?" }, { assistant: "It has great features." },
            { user: "What about its camera quality?" }, { assistant: "The iPhone 12 has an excellent camera system with improvements in low-light photography." },
            { user: "And the battery life?" }, { assistant: "It offers decent battery life that should last a full day on average usage." },
            { user: "Does it support 5G?" }, { assistant: "Yes, iPhone 12 supports 5G networks." },
            { user: "Is it water resistant?" }, { assistant: "Yes, it's rated IP68 for water and dust resistance." }
        ]
    },
    {
        id: '12', theme: 'music theory', model: 'GPT-4.0', 
        messages:[
            { user: "What is a chord?" }, { assistant: "A chord is a group of notes." },
            { user: "What is a major chord?" }, { assistant: "A major chord consists of the root note, the major third, and the perfect fifth." },
            { user: "Can you tell me about minor chords?" }, { assistant: "A minor chord consists of the root note, the minor third, and the perfect fifth." },
            { user: "What's a chord progression?" }, { assistant: "A chord progression is a series of chords played in a sequence." },
            { user: "How can I learn chord progressions?" }, { assistant: "You can start by learning common chord progressions, understanding their structures, and practicing them on an instrument." }
        ]
    },

    {
        id: '13', theme: 'financial advice', model: 'GPT-3.5', 
        messages:[
            { user: "I want to invest." }, { assistant: "Study the market trends first." },
            { user: "How do I study market trends?" }, { assistant: "There are various online resources, like financial news sites, blogs, or financial analytics platforms." },
            { user: "What's a good investment right now?" }, { assistant: "It really depends on your risk tolerance, investment goals, and time horizon. Diversified portfolios are often recommended." },
            { user: "How can I diversify my portfolio?" }, { assistant: "You can diversify by investing in a mix of stocks, bonds, commodities, and other asset classes." },
            { user: "What about cryptocurrencies?" }, { assistant: "Cryptocurrencies can be volatile and high-risk. They can form part of a diversified portfolio, but should be considered carefully." }
        ]
    },
    {
        id: '14', theme: 'latest news', model: 'GPT-4.0', 
        messages:[
            { user: "What's the latest news?" }, { assistant: "There's news about the election." },
            { user: "Who's running?" }, { assistant: "The candidates are from the two major parties, with some strong independent candidates as well." },
            { user: "What are the key issues?" }, { assistant: "The economy, healthcare, and climate change are among the key issues." },
            { user: "When is the election?" }, { assistant: "The election is scheduled for November." },
            { user: "How can I vote?" }, { assistant: "You can vote at your local polling station, or you might be eligible for mail-in voting. Check your local regulations." }
        ]
    },
    {
        id: '15', theme: 'makeup tips', model: 'GPT-3.5', messages:[
            { user: "How to apply eyeliner?" }, { assistant: "Start from the inner corner." },
            { user: "What's the best type of eyeliner to use?" }, { assistant: "That depends on the look you want. Pencil eyeliner is great for a smoky look, while liquid or gel is good for sharp lines." },
            { user: "How can I prevent my eyeliner from smudging?" }, { assistant: "Using a primer on your lids before applying eyeliner can help it stay in place." },
            { user: "What about waterproof eyeliner?" }, { assistant: "Waterproof eyeliner is a good option, especially if you live in a humid climate or tend to sweat." },
            { user: "Any recommendations for good eyeliner brands?" }, { assistant: "Brands like Urban Decay, Stila, and Maybelline have some great eyeliner options." }
        ]
    },
    {
        id: '16', theme: 'house cleaning', model: 'GPT-4.0', messages:[
            { user: "What's a quick way to clean?" }, { assistant: "Have a plan and use the right tools." },
            { user: "What type of cleaning tools would you recommend?" }, { assistant: "A good vacuum, microfiber cloths, and a mop are some basic tools." },
            { user: "Are there any good cleaning products you'd suggest?" }, { assistant: "Natural cleaners like vinegar and baking soda are effective for many surfaces. For stronger cleaning, there are brands like Mrs. Meyer's and Method." },
            { user: "How often should I clean my house?" }, { assistant: "A weekly cleaning routine works for most people, but it depends on your personal preference and schedule." },
            { user: "What about deep cleaning?" }, { assistant: "Deep cleaning is generally done every few months or seasonally to address areas not regularly cleaned." }
        ]
    },
    {
        id: '17', theme: 'car maintenance', model: 'GPT-3.5', 
        messages:[
            { user: "How often to change oil?" }, { assistant: "Every 3000 to 5000 miles." },
            { user: "What type of oil should I use?" }, { assistant: "Check your vehicle's manual for the recommended type of oil." },
            { user: "How about tire pressure?" }, { assistant: "You should check your tire pressure at least once a month. The correct pressure can be found in your vehicle's manual." },
            { user: "Should I rotate my tires?" }, { assistant: "Yes, rotating your tires can help them wear evenly and extend their life." },
            { user: "What's a timing belt?" }, { assistant: "A timing belt is a part of an internal combustion engine that synchronizes the rotation of the crankshaft and the camshaft(s)." }
        ]
    },

    {
        id: '18', theme: 'plant care', model: 'GPT-4.0', 
        messages:[
            { user: "My plant is dying." }, { assistant: "Check its sunlight and water needs." },
            { user: "How much sunlight does it need?" }, { assistant: "It depends on the type of plant. Some need full sun while others prefer shade." },
            { user: "I think I'm overwatering it." }, { assistant: "Yes, overwatering is a common issue. Most houseplants prefer their soil to dry out a bit between waterings." },
            { user: "The leaves are turning yellow." }, { assistant: "Yellow leaves could indicate overwatering, underwatering, or a lack of nutrients." },
            { user: "What kind of nutrients does it need?" }, { assistant: "Most plants need a balance of nitrogen, phosphorus, and potassium, along with minor nutrients." }
        ]
    },
    {
        id: '19', theme: 'pet care', model: 'GPT-3.5', 
        messages:[
            { user: "My dog is not eating." }, { assistant: "Maybe he's feeling unwell." },
            { user: "Should I take him to the vet?" }, { assistant: "If he's not eating for more than a day, or if there are other symptoms, you should consult a vet." },
            { user: "He's also lethargic." }, { assistant: "Those could be signs of illness. It's important to get him checked out." },
            { user: "What can I do to encourage him to eat?" }, { assistant: "Try changing his diet, warming his food a little, or feeding him at regular times." },
            { user: "What type of food is best for dogs?" }, { assistant: "A balanced diet is important. There are high-quality commercial dog foods, but some owners also prefer a raw or homemade diet. Always consult with a vet." }
        ]
    },
    {
        id: '20', theme: 'career advice', model: 'GPT-4.0', 
        messages:[
            { user: "I want a career change." }, { assistant: "Consider your interests and skills." },
            { user: "I'm interested in technology, but I don't have much experience." }, { assistant: "You could consider taking online courses or attending a boot camp to acquire the necessary skills." },
            { user: "Is it hard to switch to a tech career?" }, { assistant: "It can be challenging, but with dedication and the right resources, many people successfully make the switch." },
            { user: "What fields in technology are in demand?" }, { assistant: "Fields such as data science, artificial intelligence, and cybersecurity are in high demand." },
            { user: "How do I start learning data science?" }, { assistant: "There are many online resources and platforms like Coursera and edX where you can take data science courses." }
        ]
    }
]

export const mockMessages = []
mockChatList.forEach((chat) => {
    chat.messages.forEach((message) => {
        if(message.user) mockMessages.push(message.user)
        else mockMessages.push(message.assistant)
    })
})