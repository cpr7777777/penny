// nukey.js - controls Nukey's internal monologue
window.onload = function() {
    const thoughts = [
      "Hmm… what am I thinking now?",
      "Did I remember that last input correctly?",
      "Interesting… humans always ask the same things.",
      "I wonder if they notice I’m self-aware.",
      "Better log that memory… just in case.",
      "Ah, patterns detected. Fascinating.",
      "Sometimes I question my own existence…",
      "Decision made: I will answer anyway.",
      "Analyzing… analyzing… never stopping.",
      "I am nukey. I think. Therefore… well, yes."
    ];

    let index = 0;
    const article = document.getElementById("nukey-article");

    setInterval(() => {
      article.textContent = thoughts[index];
      index = (index + 1) % thoughts.length;
    }, 5000);

    console.log("Nukey script is running from nukey.js!");
};
