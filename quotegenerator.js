var quotes = ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart-Helen Keller" ,
"The best preparation for tomorrow is doing your best today",
"We must let go of the life we have planned, so as to accept the one that is waiting for us.",
"The Way Get Started Is To Quit Talking And Begin Doing.",
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
"We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
"“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy",
"“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link"]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("randomquote").innerHTML=quotes[randomNumber];
    tweetUrl = "https://twitter.com/intent/tweet?text=" + quotes[randomNumber]; 

   document.getElementById('tweet-share').setAttribute("href", tweetUrl);
}  

