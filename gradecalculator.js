// // Challenge 1: Student Grade Generator (Toy Problem)

// // Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

// //         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


const prompt = require('prompt-sync')();

function gradeGenerator(){
    // prompt the user to enter their marks 
    let marks = prompt('ENTER YOUR MARKS BETWEEN 0-100: ');

    marks = Number(marks); // convert the entered marks into a number

    // check the validity of the entered marks
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Please Enter Your correct marks between 0-100');
        return; // stop further execution if marks are invalid
    }

    // check the grade based on the marks entered
    let grade; // declare the variable but it remains undefined
    if (marks > 79) {
        grade = 'A';
        console.log(`Amazing! You have an ${grade}`);
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
        console.log(`Well Done You have a ${grade}`);
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
        console.log(`Nice Try You have a ${grade}`);
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
        console.log(`There is Room for Improvement You have a ${grade}`);
    } else if (marks < 40 && marks >= 0) {
        grade = 'E';
        console.log(`Retake course! You have an ${grade}`);
    }

    return grade; // return the grade
}

gradeGenerator(); // call the function

