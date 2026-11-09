class Question {
    constructor(texty, answers) {
        this.texty = texty;
        this.answers = answers; 
    }
}
class Answer {
    constructor(texty, valys) {
        this.texty = texty;
        this.valys = valys;
    }
}
/*enum factions {
    Abnegation = "Abnegation",
    Erudite = "Erudite",
    Dauntless = "Dauntless",
    Amity = "Amity",
    Candor = "Candor",
    Divergent = "Divergent"
};
*/
const questions = [
    new Question("What do you value most?", [
        new Answer("Selflessness", { Abnegation: 1, Erudite: 0, Dauntless: 0, Amity: 0, Candor: 0 }),
        new Answer("Knowledge", { Abnegation: 0, Erudite: 1, Dauntless: 0, Amity: 0, Candor: 0 }),
        new Answer("Bravery", { Abnegation: 0, Erudite: 0, Dauntless: 1, Amity: 0, Candor: 0 }),
        new Answer("Peace", { Abnegation: 0, Erudite: 0, Dauntless: 0, Amity: 1, Candor: 0 }),
        new Answer("Honesty", { Abnegation: 0, Erudite: 0, Dauntless: 0, Amity: 0, Candor: 1 }),
    ]),
    new Question("How do you handle conflict?", [
        new Answer("Avoid it", { Abnegation: 1, Erudite: 0, Dauntless: 0, Amity: 1, Candor: 0 }),
        new Answer("Analyze it", { Abnegation: 0, Erudite: 1, Dauntless: 0, Amity: 0, Candor: 0 }),
        new Answer("Confront it", { Abnegation: 0, Erudite: 0, Dauntless: 1, Amity: 0, Candor: 0 }),
        new Answer("Resolve it peacefully", { Abnegation: 0, Erudite: 0, Dauntless: 0, Amity: 1, Candor: 0 }),
        new Answer("Speak the truth", { Abnegation: 0, Erudite: 0, Dauntless: 0, Amity: 0, Candor: 1 }),
    ]),
];
function triviaShow() {
    const triviaSection = document.createElement("div");
    triviaSection.id = "trivia-section";
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        const questiontexty = document.createElement("p");
        questiontexty.textyContent = question.texty;
        questionDiv.appendChild(questiontexty);
        question.answers.forEach((answer) => {
            const answerButton = document.createElement("button");
            answerButton.textyContent = answer.texty;
            answerButton.onclick = () => answerGives(answer.valys);
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
function answerGive(valys) {
    for (const key in valys) {
        scores[key] += valys[key];
    }
    resulties();
}

function resulties() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h3>Results:</h3>
        <p>Abnegation: ${scores.Abnegation}</p>
        <p>Erudite: ${scores.Erudite}</p>
        <p>Dauntless: ${scores.Dauntless}</p>
        <p>Amity: ${scores.Amity}</p>
        <p>Candor: ${scores.Candor}</p>
    `;
}
triviaShow();