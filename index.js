// // Challenge 1: Student Grade Generator (Toy Problem)

// // Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

// //         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


// function gradegenerator(marks){
//     if (marks > 79 && marks <=100){
//         return 'A'
//     } else if (marks >=60 && marks <= 79){
//         return 'B'
//     }else if (marks >=49 && marks <=59 ){
//         return 'C'
//     }else if (marks >= 40 && marks < 49){
//         return 'D'
//     }else if (marks < 40){
//         return 'E'
//     }else {
//         return 'Not valid marks'
//     }

// }
// console.log(gradegenerator(52));


// // Challenge 2: Speed Detector (Toy Problem)

// // Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// //    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


// function speedDetector(speed){
//     if (speed < 70){
//         return 'Ok'
//     }else if (speed >70 && speed < 75){
//         return 'points: 1'
//     }else if (speed >=75 && speed < 80){
//         return 'Points: 2'
//     }else if (speed >=80 && speed < 85){
//         return 'Points: 3'
//     }else if (speed >=85 && speed < 90){
//         return 'Points: 4'
//     }else if (speed >=90 && speed < 95){
//         return 'Points: 5'
//     }else if (speed >=95 && speed < 100){
//         return 'Points: 6'
//     }else if (speed >=100 && speed < 105){
//         return 'Points: 7'
//     }else if (speed >=105 && speed < 110){
//         return 'Points: 8'
//     }else if (speed >=110 && speed < 115){
//         return 'Points: 9'
//     }else if (speed >=115 && speed < 120){
//         return 'Points: 10'
//     }else if (speed >=120 && speed < 125){
//         return 'Points: 11'
//     }else if (speed >=125 && speed < 130){
//         return 'Points: 12'
//     }else if (speed >= 130){
//         return 'License suspended'
//     }
// }
// console.log(speedDetector(200));// returns License suspended



// // Challenge 3: Net Salary Calculator (Toy Problem)

// // Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


function individualNetSalary(){
    let grossPay = 100000;
    let nssfDeduction = calculateNssfDeductions(grossPay);
    let payeeTax = calculatePayee(grossPay);
    let nhifDeduction = calculateNhifDeductions(grossPay);

    let netSalary = grossPay - nssfDeduction - payeeTax - nhifDeduction;
    return netSalary;
}

function calculateNssfDeductions(grossSalary){
    return grossSalary * 0.06; // nssf deductions are 6% of the gross pay
}

function calculatePayee(taxIncome){
    if (taxIncome <= 24000){
        return taxIncome * 0.1;
    } else if (taxIncome > 24000 && taxIncome <= 32333){
        return taxIncome * 0.25;
    } else if (taxIncome > 32333 && taxIncome <= 500000){
        return taxIncome * 0.3;
    } else if (taxIncome > 500000 && taxIncome <= 800000){
        return taxIncome * 0.325;
    } else if (taxIncome > 800000){
        return taxIncome * 0.35;
    }
}

function calculateNhifDeductions(grossPay){
    if (grossPay <= 5999){
        return 150;
    } else if (grossPay >= 6000 && grossPay <= 7999){
        return 300;
    } else if (grossPay >= 8000 && grossPay <= 11999){
        return 400;
    } else if (grossPay >= 12000 && grossPay <= 14999){
        return 500;
    } else if (grossPay >= 15000 && grossPay <= 19999){
        return 600;
    } else if (grossPay >= 20000 && grossPay <= 24999){
        return 700;
    } else if (grossPay >= 25000 && grossPay <= 29999){
        return 800;
    } else if (grossPay >= 30000 && grossPay <= 34999){
        return 900;
    } else if (grossPay >= 35000 && grossPay <= 39999){
        return 950;
    } else if (grossPay >= 40000 && grossPay <= 44999){
        return 1000;
    } else if (grossPay >= 45000 && grossPay <= 49999){
        return 1100;
    } else if (grossPay >= 50000 && grossPay <= 59999){
        return 1200;
    } else if (grossPay >= 60000 && grossPay <= 69999){
        return 1300;
    } else if (grossPay >= 70000 && grossPay <= 79999){
        return 1400;
    } else if (grossPay >= 80000 && grossPay <= 89999){
        return 1500;
    } else if (grossPay >= 90000 && grossPay <= 99999){
        return 1600;
    } else if (grossPay >= 100000){
        return 1700;
    }
}

console.log(individualNetSalary());  // Output the net salary































// Will be reviewed later for practice 

// function individualNetSalary(){
//     let grossPay = 200000;
//     let nssfDeduction = nssfDeductions(grossPay);
//     let payeeTax = payee(grossPay);
//     let nhifDeduction = nhifDeductions(grossPay);


//     let netSalary = grossPay-nssfDeductions-payee-nhifDeductions;
//         return netSalary;

// }

// function nssfDeductions(nssf){
//     return grossPay * 0.06; // nssf deductions are 6% of the gross pay

// }
// function payee(taxIncome){
//     if (taxIncome <= 24000){
//         return taxIncome * 0.1;
//     }else if (taxIncome > 24000 && taxIncome <= 32333){
//         return taxIncome * 0.25;
//     }else if (taxIncome > 32333 && taxIncome <= 500000){
//         return taxIncome * 0.3;
//     }else if (taxIncome > 500000 && taxIncome <= 800000){
//         return taxIncome * 0.325;
//     }else if (taxIncome > 800000){
//         return taxIncome * 0.35
//     }
// }

// function nhifDeductions(grossPay){
//     if (grossPay <= 5999){
//         return 150
//     }else if (grossPay >= 6000 && grossPay <=7999){
//         return 300
//     }else if (grossPay >= 8000 && grossPay <=11999){
//         return 400
//     }else if (grossPay >= 12000 && grossPay <=14999){
//         return 500
//     }else if (grossPay >= 15000 && grossPay <=19999){
//         return 600
//     }else if (grossPay >= 20000 && grossPay <=24999){
//         return 700
//     }else if (grossPay >= 25000 && grossPay <=29999){
//         return 800
//     }else if (grossPay >= 30000 && grossPay <=34999){
//         return 900
//     }else if (grossPay >= 35000 && grossPay <=39999){
//         return 950
//     }else if (grossPay >= 40000 && grossPay <=44999){
//         return 1000
//     }else if (grossPay >= 45000 && grossPay <=49999){
//         return 1100
//     }else if (grossPay >= 50000 && grossPay <=59999){
//         return 1200
//     }else if (grossPay >= 60000 && grossPay <=69999){
//         return 1300
//     }else if (grossPay >= 70000 && grossPay <=79999){
//         return 1400
//     }else if (grossPay >= 80000 && grossPay <=89999){
//         return 1500
//     }else if (grossPay >= 90000 && grossPay <=99999){
//         return 1600
//     }else if (grossPay >= 100000){
//         return 1700
//     }

// }
// console.log(individualNetSalary()); 