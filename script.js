/*
    Name: Aniken Wiens-Shepherd
    Date: October 5, 2025
    About: Creating an Adventure Game
*/

document.addEventListener("DOMContentLoaded", (event) => {

    // Initial Setup
    let currentState = "start";
    const answers = document.getElementById("answers");
    const question = document.getElementById("question");

    // Render Question
    function renderQuestion(state) {
        let text = "";
        if(state === "start") {
            text = "You come across a fork in the road, do you take the path more or less travelled by?";
        } else if(state === "well-travelled") {
            text = "As you travel down the well-travelled road, you come across an old man limping along, do you stop to help him?";
        } else if(state === "yes-old-man") {
            text = "The old man warns you of bandits, so you rush to the nearby town. You made it safely. THE END!";
        } else if(state === "no-old-man") {
            text = "As you go past the old man, bandits jump out and ambush you. They take all your money and leave you alone on the road. BAD END!";
        } else if(state === "less-travelled") {
            text = "Following the less-travelled path, you come across a warning sign. The sign recommends going back, do you follow the sign's advice?";
        } else if(state === "continue") {
            text = "You keep walking forward. You can now see a broken cart off the side of the road with some people standing beside it. Do you stop to check on them?";
        } else if(state === "yes-check") {
            text = "Some of the people are hurt, do you help provide some first aid?";
        } else if(state === "no-help") {
            text = "After refusing to help the people, you go back to the road. As you get closer to the road, it suddenly disappears, and when you turn around, the cart has also disappeared. You are now lost. BAD END!";
        } else if(state === "yes-help") {
            text = "The people are thankful for your help and guide you to the town. You made it. THE END!";
        } else if(state ==="no-check") {
            text = "You stay on the path and continue walking. You come across a deer blocking the path. Do you attempt a detour or do you stay on the path?";
        } else if(state === "stay") {
            text = "The deer disappears as you get closer. You eventually make it to the nearby town. THE END!";
        } else if(state === "detour") {
            text = "As you leave the path, both the road and the deer disappear. You are now lost. BAD END!";
        } else {
            console.error("CurrentState is not valid");
        }
        console.log(text)
        question.textContent = text;
        answers.innerHTML = "";
        addAnswerButton(state);
    }

    // Add Answer Button
    function addAnswerButton(state) {
        // Setting Buttons
        let buttonOne = "";
        let buttonTwo = "";

        if(state === "start") {
            buttonOne = "Well-Travelled Path";
            buttonTwo = "Less-Travelled Path";
        } else if(state === "well-travelled") {
            buttonOne = "Help";
            buttonTwo = "Don't Help";
        } else if(state === "yes-old-man") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(state === "no-old-man") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(state === "less-travelled") {
            buttonOne = "Continue";
            buttonTwo = "Return";
        } else if(state === "continue") {
            buttonOne = "Check";
            buttonTwo = "Don't Check"; 
        } else if(state === "yes-check") {
            buttonOne = "Help";
            buttonTwo = "Don't Help";
        } else if(state === "no-help") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(state === "yes-help") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(state === "no-check") {
            buttonOne = "Stay on Path";
            buttonTwo = "Take Detour";
        } else if(state === "stay") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(state === "detour") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else {
            console.error("CurrentState is not valid");
        }

        const newFirstButton = document.createElement("button");
        newFirstButton.textContent = buttonOne;
        answers.appendChild(newFirstButton);

        const newSecondButton = document.createElement("button");
        newSecondButton.textContent = buttonTwo;
        answers.appendChild(newSecondButton);

        newFirstButton.addEventListener("click", () => {
            buttonChoice(state, true);
        })
        newSecondButton.addEventListener("click", () =>{
            buttonChoice(state, false);
        })
    }

    function buttonChoice(state, choice) {
        if(state === "start") {
            currentState = choice
                ? "well-travelled"
                : "less-travelled";
        } else if(state === "well-travelled"){
            currentState = choice
                ? "yes-old-man"
                : "no-old-man";
        } else if(["yes-old-man", "no-old-man", "yes-help", "no-help", "stay", "detour"].includes(state)) {
            currentState = "start";
        } else if(state === "less-travelled") {
            currentState = choice
                ? "continue"
                : "well-travelled";
        } else if(state === "continue") {
            currentState = choice
                ? "yes-check"
                : "no-check";
        } else if(state === "yes-check") {
            currentState = choice
                ? "yes-help"
                : "no-help";
        } else if(state === "no-check") {
            currentState = choice
                ? "stay"
                : "detour";
        }

        renderQuestion(currentState);
    }

    renderQuestion(currentState);
})