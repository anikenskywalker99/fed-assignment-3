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
        if(currentState = "start") {
            let text = "You come across a fork in the road, do you take the path more or less travelled by?";
        } else if(currentState = "well-travelled") {
            let text = "As you travel down the well-travelled road, you come across on old man limping along, do you stop to help him?";
        } else if(currentState = "yes-old-man") {
            let text = "The old man warns you of bandits, so you rush to the nearby town. You made it safely. THE END!";
        } else if(currentState = "no-old-man") {
            let text = "As you go past the old man, bandits jump out and ambush you. They take all your money and leave you alone on the road. BAD END!";
        } else if(currentState = "less-travelled") {
            let text = "Following the less-travelled path, you come across a warning sign. The sign recommends going back, do you follow the sign's advice?";
        } else if(currentState = "continue") {
            let text = "You keep walking forward. You can now see a broken cart off the side of the road with some people standing beside it. Do you stop to check on them?";
        } else if(currentState = "yes-check") {
            let text = "Some of the people are hurt, do you help provide some first aid?";
        } else if(currentState = "no-help") {
            let text = "After refusing to help the people, you go back to the road. As you get closer to the road, it suddenly disappears, and when you turn around, the cart has also disappeared. You are now lost. BAD END!";
        } else if(currentState = "yes-help") {
            let text = "The people are thankful for your help and guide you to the town. You made it. THE END!";
        } else if(currentState = "no-check") {
            let text = "You stay on the path and continue waling. You come across a deer blocking the path. Do you attempt a detour or do you stay on the path?";
        } else if(currentState = "stay") {
            let text = "The deer disappears as you get closer. You eventually make it to the nearby town. THE END!";
        } else if(currentState = "detour") {
            let text = "As you leave the path, both the road and the deer disappear. You are now lost. BAD END!";
        } else {
            console.error("CurrentState is not valid");
        }

        question.setAttribute("Your Adventure Begins now...", text);
        while (answers.firstChild) {
            answers.removeChild(answers.lastChild);
        }

        addAnswerButton(currentState)
    }

    // Add Answer Button
    function addAnswerButton(currentState) {
        if(currentState = "start") {
            buttonOne = "Well-Travelled Path";
            buttonTwo = "Less-Travelled Path";
        } else if(currentState = "well-travelled") {
            buttonOne = "Help";
            buttonTwo = "Don't Help";
        } else if(currentState = "yes-old-man") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(currentState = "no-old-man") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(currentState = "less-travelled") {
            buttonOne = "Contine";
            buttonTwo = "Return";
        } else if(currentState = "continue") {
            buttonOne = "Check";
            buttonTwo = "Don't Check"; 
        } else if(currentState = "yes-check") {
            buttonOne = "Help";
            buttonTwo = "Don't Help";
        } else if(currentState = "no-help") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(currentState = "yes-help") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(currentState = "no-check") {
            buttonOne = "Stay on Path";
            buttonTwo = "Take Detour";
        } else if(currentState = "stay") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else if(currentState = "detour") {
            buttonOne = "Restart";
            buttonTwo = "Restart";
        } else {
            console.error("CurrentState is not valid");
        }

        let newFirstButton = document.createElement("button");
        newFirstButton.textContent = buttonOne;
        answers.appendChild(newFirstButton);

        let newSecondButton = document.createElement("button");
        newSecondButton.textContent = buttonTwo;
        answers.appendChild(newSecondButton);
    }

    newFirstButton.addEventListener("click", () => {
        if(currentState = "start") {
            currentState = "well-travelled";
        } else if(currentState = "well-travelled") {
            currentState = "yes-old-man";
        } else if(currentState = "yes-old-man") {
            currentState = "start";
        } else if(currentState = "no-old-man") {
            currentState = "start";
        } else if(currentState = "less-travelled") {
            currentState = "well-travelled";
        } else if(currentState = "continue") {
            currentState = "yes-check";
        } else if(currentState = "yes-check") {
            currentState = "yes-help";
        } else if(currentState = "no-help") {
            currentState = "start";
        } else if(currentState = "yes-help") {
            currentState = "start";
        } else if(currentState = "no-check") {
            currentState = "stay";
        } else if(currentState = "stay") {
            currentState = "start";
        } else if(currentState = "detour") {
            currentState = "start";
        } else {
            console.error("CurrentState is not valid");
        }
        renderQuestion(currentState);
    })
    newSecondButton.addEventListener("click", () => {
        if(currentState = "start") {
            currentState = "less-travelled";
        } else if(currentState = "well-travelled") {
            currentState = "no-old-man";
        } else if(currentState = "yes-old-man") {
            currentState = "start";
        } else if(currentState = "no-old-man") {
            currentState = "start";
        } else if(currentState = "less-travelled") {
            currentState = "continue";
        } else if(currentState = "continue") {
            currentState = "no-check";
        } else if(currentState = "yes-check") {
            currentState = "no-help";
        } else if(currentState = "no-help") {
            currentState = "start";
        } else if(currentState = "yes-help") {
            currentState = "start";
        } else if(currentState = "no-check") {
            currentState = "detour";
        } else if(currentState = "stay") {
            currentState = "start";
        } else if(currentState = "detour") {
            currentState = "start";
        } else {
            console.error("CurrentState is not valid");
        }
        renderQuestion(currentState);
    })
})