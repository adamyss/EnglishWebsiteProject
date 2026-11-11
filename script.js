
const questions = [
    {
        question: "What is your favorite activity?",
        answers: [
            { text: "Helping others", values: { Abnegation: 1 } },
            { text: "Learning new things", values: { Erudite: 1 } },
            { text: "Taking risks", values: { Dauntless: 1 } },
            { text: "Keeping peace", values: { Amity: 1 } },
            { text: "Telling the truth", values: { Candor: 1 } },
        ],
    },
    {
        question: "What is your greatest strength?",
        answers: [
            { text: "Selflessness", values: { Abnegation: 1 } },
            { text: "Intelligence", values: { Erudite: 1 } },
            { text: "Bravery", values: { Dauntless: 1 } },
            { text: "Kindness", values: { Amity: 1 } },
            { text: "Honesty", values: { Candor: 1 } },
        ],
    },
];
function triviaShow() {
    const triviaSection = document.createElement("div");
    triviaSection.id = "trivia";
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        const questionText = document.createElement("h3");
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);
        q.answers.forEach((answer) => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answer.text;
            answerButton.onclick = () => answerGive(answer.values);
            questionDiv.appendChild(answerButton);
        });
        triviaSection.appendChild(questionDiv);
    });
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    triviaSection.appendChild(resultsDiv);

    document.body.appendChild(triviaSection);
}
const scores = {
    Abnegation: 0,
    Erudite: 0,
    Dauntless: 0,
    Amity: 0,
    Candor: 0,
};
function answerGive(values) {
    for (const key in values) {
        scores[key] += values[key];
    }
    resulties();
}

function resulties() {
    let highest = 0;
    let resultyyy = "";
    for (const key in scores) {
        if (scores[key] > highest) {
            highest = scores[key];
            resultyyy = key;
        }
    }
     num = 0;
    for(const key2222 in scores){
        if(scores[key2222] >= highest -2 ){
          num += 1;
        }
    }
    if (num >= 2){
        resultyyy = "Divergent";
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h3>Results:</h3>
        <p>Abnegation: ${scores.Abnegation}</p>
        <p>Erudite: ${scores.Erudite}</p>
        <p>Dauntless: ${scores.Dauntless}</p>
        <p>Amity: ${scores.Amity}</p>
        <p>Candor: ${scores.Candor}</p>
        <p>Faction: ${resultyyy}</p>
    `;
}

triviaShow();