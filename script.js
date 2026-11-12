
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
    {
        question: "Your team is about to present a plan, and you notice a mistake that could cause problems later. What do you do?",
        answers: [
            { text: "Quietly fix it, even if nobody knows you helped.", values: { Abnegation: 1 } },
            { text: "Check the facts and find the best solution before speaking up.", values: { Erudite: 1 } },
            { text: "Call it out right away and help the team change course.", values: { Dauntless: 1 } },
            { text: "Bring it up calmly and help everyone agree on a new plan.", values: { Amity: 1 } },
            { text: "Make sure the group knows exactly what went wrong.", values: { Candor: 1 } },
        ],
    },
    {
        question: "At a busy community event, the lights suddenly go out. What is your first move?",
        answers: [
            { text: "Check whether anyone needs help, especially children or older guests.", values: { Abnegation: 1 } },
            { text: "Figure out what caused the outage and what resources are available.", values: { Erudite: 1 } },
            { text: "Head toward the problem to see if you can safely help.", values: { Dauntless: 1 } },
            { text: "Reassure people nearby and keep them calm.", values: { Amity: 1 } },
            { text: "Tell everyone what you know so nobody is left guessing.", values: { Candor: 1 } },
        ],
    },
    {
        question: "You discover that a popular announcement contains information that may be wrong. What do you do?",
        answers: [
            { text: "Make sure anyone who could be affected gets help first.", values: { Abnegation: 1 } },
            { text: "Look for reliable sources and verify the details.", values: { Erudite: 1 } },
            { text: "Speak up publicly, even if people might push back.", values: { Dauntless: 1 } },
            { text: "Talk with the people who shared it and work toward a calm correction.", values: { Amity: 1 } },
            { text: "Clearly explain what is inaccurate and what is known.", values: { Candor: 1 } },
        ],
    },
    {
        question: "A new person joins your group and seems left out. How do you respond?",
        answers: [
            { text: "Offer to take a less exciting task so they can be included.", values: { Abnegation: 1 } },
            { text: "Ask what they enjoy and find a role that fits their skills.", values: { Erudite: 1 } },
            { text: "Invite them directly to join what everyone else is doing.", values: { Dauntless: 1 } },
            { text: "Help the whole group find a welcoming way to include them.", values: { Amity: 1 } },
            { text: "Ask honestly how they are feeling instead of making assumptions.", values: { Candor: 1 } },
        ],
    },
    {
        question: "Your friends disagree about how to spend a shared budget. What matters most to you?",
        answers: [
            { text: "Use it for the people who need the most support.", values: { Abnegation: 1 } },
            { text: "Compare the options and choose what will work best long-term.", values: { Erudite: 1 } },
            { text: "Try the bold idea that could make the biggest difference.", values: { Dauntless: 1 } },
            { text: "Find a compromise that everyone can feel good about.", values: { Amity: 1 } },
            { text: "Make the costs and trade-offs clear before deciding.", values: { Candor: 1 } },
        ],
    },
    {
        question: "You have a difficult goal to reach with only one free afternoon. What do you do?",
        answers: [
            { text: "Spend the time helping someone else with an important need.", values: { Abnegation: 1 } },
            { text: "Make a careful plan and tackle the most challenging part first.", values: { Erudite: 1 } },
            { text: "Jump in and learn by taking on the hardest part yourself.", values: { Dauntless: 1 } },
            { text: "Team up with someone and make the work enjoyable.", values: { Amity: 1 } },
            { text: "Be realistic about what can be done and say what you need.", values: { Candor: 1 } },
        ],
    },
];
const factionColorOrder = ["abnegation", "erudite", "dauntless", "amity", "candor"];

function triviaShow() {
    const triviaSection = document.getElementById("trivia");
    const quizHeader = document.createElement("header");
    quizHeader.className = "quiz-header";
    quizHeader.innerHTML = `
        <p class="eyebrow">PERSONALITY QUIZ!!!! :D</p>
        <h1>Which faction are you?</h1>
        <p>Pick the answer that feels most like you / is what you would do</p>
        <div class="progress-label"><span id="progress-text">Question 1 of ${questions.length}</span><span id="progress-percent">0%</span></div>
        <div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="0">
            <div class="progress-fill"></div>
        </div>
    `;
    triviaSection.appendChild(quizHeader);

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question-card";
        questionDiv.classList.add(`faction-${factionColorOrder[index % factionColorOrder.length]}`);
        const questionText = document.createElement("h3");
        questionText.className = "question-title";
        const questionNumber = document.createElement("span");
        questionNumber.className = "question-number";
        questionNumber.textContent = `0${index + 1}`;
        questionText.appendChild(questionNumber);
        const questionLabel = document.createElement("span");
        questionLabel.textContent = q.question;
        questionText.appendChild(questionLabel);
        questionDiv.appendChild(questionText);
        const answersList = document.createElement("div");
        answersList.className = "answer-list";
        const shuffledAnswers = [...q.answers];
        for (let i = shuffledAnswers.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledAnswers[i], shuffledAnswers[randomIndex]] = [shuffledAnswers[randomIndex], shuffledAnswers[i]];
        }

        let selectedValues = null;
        shuffledAnswers.forEach((answer) => {
            const answerButton = document.createElement("button");
            answerButton.type = "button";
            answerButton.className = "answer-option";
            answerButton.textContent = answer.text;
            answerButton.setAttribute("aria-pressed", "false");
            answerButton.onclick = () => {
                if (selectedValues === answer.values) return;
                const previousValues = selectedValues;
                selectedValues = answer.values;
                questionDiv.dataset.answered = "true";
                answersList.querySelectorAll("button").forEach((button) => {
                    button.classList.remove("selected");
                    button.setAttribute("aria-pressed", "false");
                });
                answerButton.classList.add("selected");
                answerButton.setAttribute("aria-pressed", "true");
                answerGive(answer.values, previousValues);
            };
            answersList.appendChild(answerButton);
        });
        questionDiv.appendChild(answersList);
        triviaSection.appendChild(questionDiv);
    });
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.className = "results-card";
    triviaSection.appendChild(resultsDiv);
}
const scores = {
    Abnegation: 0,
    Erudite: 0,
    Dauntless: 0,
    Amity: 0,
    Candor: 0,
};
let answeredCount = 0;

function answerGive(values, previousValues) {
    if (previousValues) {
        for (const key in previousValues) {
            scores[key] -= previousValues[key];
        }
    } else {
        answeredCount += 1;
    }

    for (const key in values) {
        scores[key] += values[key];
    }
    updateProgress();
    if (answeredCount === questions.length) {
        resulties();
    }
}

function updateProgress() {
    const progressTrack = document.querySelector(".progress-track");
    const progressFill = document.querySelector(".progress-fill");
    const progressText = document.getElementById("progress-text");
    const progressPercent = document.getElementById("progress-percent");
    const percentage = Math.round((answeredCount / questions.length) * 100);

    progressTrack.setAttribute("aria-valuenow", answeredCount);
    progressFill.style.width = `${percentage}%`;
    progressPercent.textContent = `${percentage}%`;
    progressText.textContent = answeredCount === questions.length
        ? "Quiz complete!"
        : `Question ${answeredCount + 1} of ${questions.length}`;
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
    let num = 0;
    for(const key2222 in scores){
        if(scores[key2222] >= highest -1 ){
          num += 1;
        }
    }
    if (num >= 2){
        resultyyy = "Divergent";
    }

    const resultsDiv = document.getElementById("results");
    const resultHeading = resultyyy === "Divergent"
        ? "You are <span>Divergent</span>!"
        : `You belong in <span>${resultyyy}</span>!`;
    resultsDiv.classList.add("is-visible");
    resultsDiv.innerHTML = `
        <p class="eyebrow">YOUR RESULT</p>
        <h2>${resultHeading}</h2>
        <div class="score-list">
            <p><span>Abnegation</span><strong>${scores.Abnegation}</strong></p>
            <p><span>Erudite</span><strong>${scores.Erudite}</strong></p>
            <p><span>Dauntless</span><strong>${scores.Dauntless}</strong></p>
            <p><span>Amity</span><strong>${scores.Amity}</strong></p>
            <p><span>Candor</span><strong>${scores.Candor}</strong></p>
        </div>
    `;
    resultsDiv.scrollIntoView({ behavior: "smooth", block: "center" });
}

triviaShow();

document.getElementById("take-quiz").addEventListener("click", () => {
    document.getElementById("trivia").hidden = false;
});