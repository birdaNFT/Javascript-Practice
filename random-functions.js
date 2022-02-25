// Random Functions to Practice Javascript



// Prints All the Characters of a String
function printCharactersOf(word) {
    for (let index = 0; index < word.length; index++) {
        console.log(word[index])
    }
};
// Enter Word Below as a String
printCharactersOf('Hello World');



// Function That Returns the Sum of Two Numbers
function sumOf(a, b) {
    return a + b
}
// Prints the Sum of Two Numbers
console.log(sumOf(2, 3));



// Calculates Tax with Monthly Salary
function calculateTax(monthlySalary) {
    let yearlySalary = monthlySalary * 12
    if (yearlySalary <= 12570) {
        return 'Your salary is within your personal allowance, so you don\'t need to pay any tax.'
    }
    if (yearlySalary > 12570 && yearlySalary <= 50270) {
        return 'You need to pay £' + (yearlySalary * 0.2) + ' in tax.'
    }
    if (yearlySalary > 50270 && yearlySalary <= 150000) {
        return 'You need to pay £' + (yearlySalary * 0.4) + ' in tax.'
    }
    if (yearlySalary > 150000) {
        return 'You need to pay £' + (yearlySalary * 0.45) + ' in tax.'
    }
};
// Prints Amount of Tax with Monthly Salary
console.log(calculateTax(2500));



// Bill Splitter
function splitBill(amount, numberOfPeople) {
    return amount / numberOfPeople
}
// Prints the Amount Each Person Needs To Pay
console.log('£' + splitBill(36, 6) + ' per person.');