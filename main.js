const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.<br /> <span id='quoter'>- Nelson Mandela</span>",
    "The way to get started is to quit talking and begin doing.<br /> <span id='quoter'>- Walt Disney</span>",
    "If life were predictable it would cease to be life, and be without flavor.<br /> <span id='quoter'>- Eleanor Roosevelt</span>",
    "Life is what happens when you're busy making other plans.<br /> <span id='quoter'>- John Lennon</span>",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.<br /> <span id='quoter'>- Mother Teresa</span>",
    "When you reach the end of your rope, tie a knot in it and hang on.<br /> <span id='quoter'>- Franklin D. Roosevelt</span>",
    "Always remember that you are absolutely unique. Just like everyone else.<br /> <span id='quoter'>- Margaret Mead</span>",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.<br /> <span id='quoter'>- Robert Louis Stevenson</span>",
    "The future belongs to those who believe in the beauty of their dreams.<br /> <span id='quoter'>- Eleanor Roosevelt</span>",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.<br /> <span id='quoter'>- Benjamin Franklin</span>",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br /> <span id='quoter'>- Helen Keller</span>",
    "The only way to do great work is to love what you do.<br /> <span id='quoter'>- Steve Jobs</span>",
    "In the end, it's not the years in your life that count. It's the life in your years.<br /> <span id='quoter'>- Abraham Lincoln</span>",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.<br /> <span id='quoter'>- Albert Schweitzer</span>",
    "The best revenge is massive success.<br /> <span id='quoter'>- Frank Sinatra</span>",
    "I have not failed. I've just found 10,000 ways that won't work.<br /> <span id='quoter'>- Thomas Edison</span>",
    "You miss 100% of the shots you don't take.<br /> <span id='quoter'>- Wayne Gretzky</span>",
    "Life is 10% what happens to us and 90% how we react to it.<br /> <span id='quoter'>- Charles R. Swindoll</span>",
    "Believe you can and you're halfway there.<br /> <span id='quoter'>- Theodore Roosevelt</span>",
    "The mind is everything. What you think you become.<br /> <span id='quoter'>- Buddha</span>",
    "Your time is limited, don't waste it living someone else's life.<br /> <span id='quoter'>- Steve Jobs</span>",
    "The only limit to our realization of tomorrow will be our doubts of today.<br /> <span id='quoter'>- Franklin D. Roosevelt</span>",
    "The best way to predict the future is to create it.<br /> <span id='quoter'>- Peter Drucker</span>",
    "The journey of a thousand miles begins with one step.<br /> <span id='quoter'>- Lao Tzu</span>",
    "Success usually comes to those who are too busy to be looking for it.<br /> <span id='quoter'>- Henry David Thoreau</span>",
    "The secret to getting ahead is getting started.<br /> <span id='quoter'>- Mark Twain</span>",
    "It does not matter how slowly you go, as long as you do not stop.<br /> <span id='quoter'>- Confucius</span>",
    "The only person you are destined to become is the person you decide to be.<br /> <span id='quoter'>- Ralph Waldo Emerson</span>",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.<br /> <span id='quoter'>- Christian D. Larson</span>",
    "Don't watch the clock; do what it does. Keep going.<br /> <span id='quoter'>- Sam Levenson</span>",
    "The harder I work, the luckier I get.<br /> <span id='quoter'>- Gary Player</span>",
    "The only way to do great work is to love what you do.<br /> <span id='quoter'>- Steve Jobs</span>",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.<br /> <span id='quoter'>- Albert Schweitzer</span>",
    "The best revenge is massive success.<br /> <span id='quoter'>- Frank Sinatra</span>",
    "I have not failed. I've just found 10,000 ways that won't work.<br /> <span id='quoter'>- Thomas Edison</span>",
    "You miss 100% of the shots you don't take.<br /> <span id='quoter'>- Wayne Gretzky</span>",
    "Life is 10% what happens to us and 90% how we react to it.<br /> <span id='quoter'>- Charles R. Swindoll</span>",
    "Believe you can and you're halfway there.<br /> <span id='quoter'>- Theodore Roosevelt</span>",
    "The mind is everything. What you think you become.<br /> <span id='quoter'>- Buddha</span>",
    "Your time is limited, don't waste it living someone else's life.<br /> <span id='quoter'>- Steve Jobs</span>",
    "The only limit to our realization of tomorrow will be our doubts of today.<br /> <span id='quoter'>- Franklin D. Roosevelt</span>",
    "The best way to predict the future is to create it.<br /> <span id='quoter'>- Peter Drucker</span>",
    "The journey of a thousand miles begins with one step.<br /> <span id='quoter'>- Lao Tzu</span>",
    "Success usually comes to those who are too busy to be looking for it.<br /> <span id='quoter'>- Henry David Thoreau</span>",
    "The secret to getting ahead is getting started.<br /> <span id='quoter'>- Mark Twain</span>",
    "It does not matter how slowly you go, as long as you do not stop.<br /> <span id='quoter'>- Confucius</span>",
    "The only person you are destined to become is the person you decide to be.<br /> <span id='quoter'>- Ralph Waldo Emerson</span>",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.<br /> <span id='quoter'>- Christian D. Larson</span>",
    "Don't watch the clock; do what it does. Keep going.<br /> <span id='quoter'>- Sam Levenson</span>",
    "The harder I work, the luckier I get.<br /> <span id='quoter'>- Gary Player</span>",
    "The best time to plant a tree was 20 years ago. The second best time is now.<br /> <span id='quoter'>- Chinese Proverb</span>",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.<br /> <span id='quoter'>- Steve Jobs</span>",
    "The only person you should try to be better than is the person you were yesterday.<br /> <span id='quoter'>- Anonymous</span>",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.<br /> <span id='quoter'>- Winston Churchill</span>",
    "Don't be afraid to give up the good to go for the great.<br /> <span id='quoter'>- John D. Rockefeller</span>",
    "I find that the harder I work, the more luck I seem to have.<br /> <span id='quoter'>- Thomas Jefferson</span>",
    "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.<br /> <span id='quoter'>- Mark Zuckerberg</span>",
    "The best revenge is massive success.<br /> <span id='quoter'>- Frank Sinatra</span>",
    "In order to succeed, we must first believe that we can.<br /> <span id='quoter'>- Nikos Kazantzakis</span>",
    "Success usually comes to those who are too busy to be looking for it.<br /> <span id='quoter'>- Henry David Thoreau</span>",
    "The only place where success comes before work is in the dictionary.<br /> <span id='quoter'>- Vidal Sassoon</span>",
    "If you want to achieve greatness stop asking for permission.<br /> <span id='quoter'>- Anonymous</span>",
    "The road to success and the road to failure are almost exactly the same.<br /> <span id='quoter'>- Colin R. Davis</span>",
    "Success is not in what you have, but who you are.<br /> <span id='quoter'>- Bo Bennett</span>",
    "The only limit to our realization of tomorrow will be our doubts of today.<br /> <span id='quoter'>- Franklin D. Roosevelt</span>",
    "Don't be afraid to give up the good to go for the great.<br /> <span id='quoter'>- John D. Rockefeller</span>",
    "The future belongs to those who believe in the beauty of their dreams.<br /> <span id='quoter'>- Eleanor Roosevelt</span>",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.<br /> <span id='quoter'>- David Brinkley</span>",
    "The only way to do great work is to love what you do.<br /> <span id='quoter'>- Steve Jobs</span>",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br /> <span id='quoter'>- Helen Keller</span>"
];


const getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
}

const displayQuote = () => {
    const quoteIndex = getRandomIndex(quotes.length);
    const quote = quotes[quoteIndex];

    const quoteContainer = document.createElement("div");
    quoteContainer.setAttribute("id", "quote-container");

    const quoteText = document.createElement("div");
    quoteText.innerHTML = quote;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", "buttons-container");

    const closeButton = document.createElement("button");
    closeButton.setAttribute("id", "close-button");
    closeButton.textContent = "❌";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(quoteContainer);
    });

    const checkButton = document.createElement("button");
    checkButton.setAttribute("id", "check-button");
    checkButton.textContent = "✅";
    checkButton.addEventListener("click", () => {
        document.body.removeChild(quoteContainer);
    });

    buttonsContainer.appendChild(closeButton);
    buttonsContainer.appendChild(checkButton);

    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(buttonsContainer);

    document.body.appendChild(quoteContainer);
}

displayQuote();
