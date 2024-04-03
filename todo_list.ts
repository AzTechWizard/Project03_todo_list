import inquirer from "inquirer";
let task=[];
let loop = true;
while(loop){
    let answer = await inquirer.prompt([
        {
            message:"What would you like to add in your todos?",
            name:"FQue",
            type:"input"
        },
        {
            message:"Would you like to add more in your todos?",
            name:"SQue",
            type:"confirm",
            default:"true"
        }
    ]);
    if (answer.FQue=="") {
        break;
    };
    task.push(answer.FQue);
    console.log(task);
    loop=answer.SQue;
};
let total = task.length;
console.log("The total number of task(s) are:",total);