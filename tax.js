//Create a function that calculates the net salary, payee, NHIFdeductions and NSSFdeductions
function calculateNetSalary(grossSalary) {
  let PAYE = payee(grossSalary);
  let NHIF = NHIFdeductions(grossSalary);
  let NSSF = NSSFdeductions(grossSalary);
  let netSalary = grossSalary - (PAYE + NHIF + NSSF);
//PAYE(TAX) rates
  function payee(grossSalary) {
          if(grossSalary <= 24000) {
              return(grossSalary * 0.1);
          } else if(grossSalary <= 32333){
              return(24000 * 0.1 + (grossSalary - 24000) * 0.25);
          } else if(grossSalary <= 500000) {
              return(24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3)
          } else if(grossSalary <= 800000) {
              return(24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325)
          } else {24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + (grossSalary - 800000) * 0.35
          }
      } 
//NHIF deductions rates
          function NHIFdeductions(grossSalary) {
              if (0 >= grossSalary <= 5999) {
                  return 150;
              } else if (grossSalary <= 7999) {
                  return 300;
              } else if (grossSalary <= 11999) {
                  return 400;
              } else if (grossSalary <= 14999) {
                  return 500;
              } else if (grossSalary <= 19999) {
                  return 600;
              } else if (grossSalary <= 24999) {
                  return 750;
              } else if (grossSalary <= 29999) {
                  return 850;
              } else if (grossSalary <= 34999) {
                  return 900;
              } else if (grossSalary <= 39999) {
                  return 950;
              }else if (grossSalary <= 44999) {
                  return 1000;
              } else if (grossSalary <= 49999) {
                  return 1100;
              } else if (grossSalary <= 59999) {
                  return 1200;
              } else if (grossSalary <= 69999) {
                  return 1300;
              } else if (grossSalary <= 79999) {
                  return 1400;
              } else if (grossSalary <= 89999) {
                  return 1500;
              } else if (grossSalary <= 99999) {
                  return 1600;
              } 
              else {
                  return 1700;
              }
          }
//NSSF deductions rates
              function NSSFdeductions(grossSalary) {
                  if(grossSalary>=7000 && grossSalary <= 36000){
                  return 420;
                  }
              else if(grossSalary>=36000){
                  return 1740;
              }
              }
              return { grossSalary, PAYE, NHIF, NSSF, netSalary };
}
//Input gross salary and benefits to get the net salary
console.log(calculateNetSalary(68000, 3000))