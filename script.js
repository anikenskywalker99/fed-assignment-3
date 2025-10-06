/*
    Name: Aniken Wiens-Shepherd
    Date: October 5, 2025
    About: Creating an Adventure Game
*/

document.addEventListener("DOMContentLoaded", (event) => {

    // Initial Setup
    let currentState = "start";

    function renderQuestion(currentState) {
        let text = "placeholder";
        return `${text}`;
    }

    // Building the User Interface
    function addAnswerButton(currentState) {
        let buttonOne = "First Placeholder";
        let newFirstButton = document.createElement("button");
        newFirstButton.textContent = buttonOne;
        
        let buttonTwo = "Second Placeholder";
        let newSecondButton = document.createElement("button");
        newSecondButton.textContent = buttonTwo;
    }
})