const prompt = require('prompt-sync')();
//generates total marks based on total

function totalMarks (total) {
    if (total >= 80 ) { 
        return 'A';
    }else if (total >= 60 && total <= 79) {
        return 'B';
    }else if (total >= 49 && total<= 59)  {
        return 'C';
    }else if (total >= 40 && total < 49) {
        return 'D';
    }else {
        return 'E';
    }
}
//ensures input is within range of 0  and 100
function userInput (input) {
    if (total >= 0 || total <= 100) {
        return true;
    }else if (total < 0 || total > 100) {
        return false;
    }
}
// prompt user to enter total
const grade = prompt("please enter your total,");
//output correct total
console.log(`You scored a: ${totalMarks(grade)}`);