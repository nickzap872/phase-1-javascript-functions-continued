// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

function displaySaturdayFun() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = saturdayFun();
}

function displayMondayWork() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = mondayWork();
}

function displayEncouragingPrompt() {
    const resultDiv = document.getElementById('result');
    const encouragingPromptFunction = wrapAdjective("!!!");
    resultDiv.textContent = encouragingPromptFunction("a dedicated programmer");
}

(function() {
    console.log("IIFE executed!");
})();
