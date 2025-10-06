/*
    Name: Aniken Wiens-Shepherd
    Date: October 5, 2025
    About: Creating an Adventure Game
*/

document.addEventListener("DOMContentLoaded", (event) => {

    // Initial Setup
    let currentState = "start";
    const answers = document.body.getElementById("answers")
    const question = document.getElementById("question")

    // Render Question
    function renderQuestion(currentState) {
        let text = "placeholder";
        question.setAttribute("Your Adventure Begins now...", text);
        while (answers.firstChild) {
            answers.removeChild(answers.lastChild);
        }
        addAnswerButton(currentState)
    }

    // Add Answer Button
    function addAnswerButton(currentState) {
        let buttonOne = "First Placeholder";
        let newFirstButton = document.createElement("button");
        newFirstButton.textContent = buttonOne;
        answers.appendChild(newFirstButton);

        let buttonTwo = "Second Placeholder";
        let newSecondButton = document.createElement("button");
        newSecondButton.textContent = buttonTwo;
        answers.appendChild(newSecondButton);
    }

    newFirstButton.addEventListener("click", () => {
        currentState = "Placeholder";
        renderQuestion(currentState);
    })
    newSecondButton.addEventListener("click", () => {
        currentState = "Placeholder";
        renderQuestion(currentState);
    })

})