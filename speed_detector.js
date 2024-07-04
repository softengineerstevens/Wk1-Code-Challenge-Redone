// // Challenge 2: Speed Detector (Toy Problem)

// // Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// //    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


let speedLimit = 70;
let kmDemirit = 5;

const prompt = require('prompt-sync')();

function speedRegulator() {
    let speed = prompt('ENTER YOUR DRIVING SPEED: ');
    speed = Number(speed);

    // Validate the speed
    if (isNaN(speed) || speed < 0) {
        console.log('ENTER A VALID SPEED');
        return;
    }

    // Evaluate the speed based on the given conditions
    if (speed <= speedLimit) {
        console.log('OK');
    } else {
        demeritCalculator(speed);
    }
}

function demeritCalculator(speed) {
    let exceededSpeed = speed - speedLimit;
    let demeritPoints = Math.ceil(exceededSpeed / kmDemirit);
    if (demeritPoints < 12) {
        console.log(`WARNING !!!! You have the following demerit points: ${demeritPoints}`);
    } else {
        console.log(`LICENCE SUSPENDED, DEMERIT POINTS: ${demeritPoints}`);
    }
}

speedRegulator();
