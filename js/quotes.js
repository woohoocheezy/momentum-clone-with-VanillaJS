const quotes = [
    {
        quote : "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        author : "Kobe Bryant"
    },
    {
        quote : "A champion is someone who gets up when he can't.",
        author : "Jack Dempsey"
    },
    {
        quote : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author : "Helen Keller"
    },
    {
        quote : "A person's a person, no matter how small.",
        author : "Dr. Seuss"
    },
    {
        quote : "But with country trap, I in no way want to take credit for that. I believe Young Thug would be one of the biggest pioneers in that.",
        author : "Lil Nas X"
    },
    {
        quote : "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        author : "Michael Jordan"
    },
    {
        quote : "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
        author : "Eminem"
    },
    {
        quote : "Open your eyes, look within. Are you satisfied with the life you're living?",
        author : "Bob Marley"
    },
    {
        quote : "We all need people who will give us feedback. That's how we improve.",
        author : "Bill Gates"
    },
    {
        quote : "I put my heart and my soul into my work, and have lost my mind in the process.",
        author : "Vincent Van Gogh"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;