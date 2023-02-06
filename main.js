const quotes = [  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",  "Your only limit is the amount of love you give. – LeCrae",  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",  "God gives his greatest challenges to his greatest warriors"];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);

    setTimeout(function() {
        rl.question("Do you want a new quote? (yes/no) ", function(answer) {
            if (answer === "yes") {
                getQuote();
            } else {
                console.log("Goodbye!");
                rl.close();
            }
        });
    }, 1000);
}

getQuote();