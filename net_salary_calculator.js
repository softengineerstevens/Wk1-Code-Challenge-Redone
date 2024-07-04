// // Challenge 3: Net Salary Calculator (Toy Problem)

// // Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


const prompt = require('prompt-sync')();

function salaryCalculator() {
    // Prompt the user to enter the basic salary and the benefits they are getting
    let basicSalary = prompt('Enter your basic salary: ');
    let benefits = prompt('Enter your benefits/allowance: ');

    // Convert the entered values to numbers
    basicSalary = Number(basicSalary);
    benefits = Number(benefits);

    // Validate the basic salary and benefits entered by the user
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log('WARNING !!! PLEASE ENTER A VALID NUMBER');
        return;
    }

    // Perform calculations
    let grossSalary = basicSalary + benefits;
    let nssfDeductions = grossSalary * 0.06; // NSSF rate is 6%
    let taxableIncome = grossSalary - nssfDeductions;
    let payee = payeeFunction(taxableIncome); // Calculate PAYE based on taxable income
    let nhif = nhifFunction(taxableIncome); // Calculate NHIF based on taxable income
    let netSalary = grossSalary - nssfDeductions - payee - nhif;

    // Output results
    console.log(`YOUR GROSS SALARY IS ${grossSalary}`);
    console.log(`YOUR NSSF DEDUCTION IS ${nssfDeductions}`);
    console.log(`YOUR TAXABLE INCOME IS ${taxableIncome}`);
    console.log(`YOUR NHIF DEDUCTION IS ${nhif}`);
    console.log(`YOUR PAYE DEDUCTION IS ${payee}`);
    console.log(`YOUR NET SALARY IS ${netSalary}`);
}

// Function to calculate NHIF based on taxable income
function nhifFunction(taxableIncome) {
    if (taxableIncome <= 5999) {
        return 150;
    } else if (taxableIncome >= 6000 && taxableIncome <= 7999) {
        return 300;
    } else if (taxableIncome >= 8000 && taxableIncome <= 11999) {
        return 400;
    } else if (taxableIncome >= 12000 && taxableIncome <= 14999) {
        return 500;
    } else if (taxableIncome >= 15000 && taxableIncome <= 19999) {
        return 600;
    } else if (taxableIncome >= 20000 && taxableIncome <= 24999) {
        return 750;
    } else if (taxableIncome >= 25000 && taxableIncome <= 29999) {
        return 850;
    } else if (taxableIncome >= 30000 && taxableIncome <= 34999) {
        return 900;
    } else if (taxableIncome >= 35000 && taxableIncome <= 39999) {
        return 950;
    } else if (taxableIncome >= 40000 && taxableIncome <= 44999) {
        return 1000;
    } else if (taxableIncome >= 45000 && taxableIncome <= 49999) {
        return 1100;
    } else if (taxableIncome >= 50000 && taxableIncome <= 59999) {
        return 1200;
    } else if (taxableIncome >= 60000 && taxableIncome <= 69999) {
        return 1300;
    } else if (taxableIncome >= 70000 && taxableIncome <= 79999) {
        return 1400;
    } else if (taxableIncome >= 80000 && taxableIncome <= 89999) {
        return 1500;
    } else if (taxableIncome >= 90000 && taxableIncome <= 99999) {
        return 1600;
    } else if (taxableIncome >= 100000) {
        return 1700;
    }
}

// Function to calculate PAYE based on taxable income
function payeeFunction(taxableIncome) {
    if (taxableIncome <= 24000) {
        return taxableIncome * 0.1;
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        return taxableIncome * 0.25;
    } else if (taxableIncome >= 32334 && taxableIncome <= 500000) {
        return taxableIncome * 0.3;
    } else if (taxableIncome >= 500001 && taxableIncome <= 800000) {
        return taxableIncome * 0.325;
    } else if (taxableIncome > 800000) {
        return taxableIncome * 0.35;
    }
}

salaryCalculator();





























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