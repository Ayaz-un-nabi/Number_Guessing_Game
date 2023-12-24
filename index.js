import inquirer from "inquirer";
async function startFunc() {
    let systemNum = Math.floor(Math.random() * 10);
    let userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Your Number From 1 to 10:"
        }
    ]);
    let { userGuess } = userNum;
    console.log("Your Guess:", userGuess, "\nsystem's Guess:", systemNum);
    if (userGuess === systemNum) {
        console.log("Your Guess Is Correct \n YOU WIN");
    }
    else {
        console.log("Try Again?");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "If you want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
