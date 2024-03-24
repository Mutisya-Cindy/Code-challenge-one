 /*Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
 Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. */
 const prompt = require ("prompt-sync")({sigint: true});
 function calculateSalary (basicSalary, benefits) {
    const TAX_RATES = { tier1: {rate:0.1, threshold:24000}, tier2: { rate:0.25, threshold: 32333}, tier3:{ rate:0.3, threshold:42767}};
    const NHIF_RATES = [0, 150, 300, 400, 500, 600, 750, 850, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200]; 
    const NSSF_EMPLOYEE_RATE = 0.06;
    const NSSF_EMPLOYER_RATE = 0.06;
   
    //calc gross salarY
    const grossSalary = basicSalary + benefits;
   
    //calc tax
    let tax = 0;
    for (const tier in TAX_RATES) {
     if (grossSalary > TAX_RATES[tier].threshold) {
       tax += TAX_RATES[tier].rate * (grossSalary - TAX_RATES[tier].threshold);
     }
    }
   
    //calc NHIF deduction
    let deduction1 = NHIF_RATES.find(rate => grossSalary <= rate)  ||  NHIF_RATES[NHIF_RATES.length - 1];
   
    //calc NSSF deduction
    const deduction2 = NSSF_EMPLOYEE_RATE * basicSalary;
   
    //calc salary
    const salary  = grossSalary - tax - deduction1 - deduction2;
   
    //result
    return {
     grossSalary: grossSalary,
     tax: tax,
     deduction1: deduction1,
     deduction2: deduction2,
     salary: salary
        };
    }
   const basicSalary = prompt("Enter your basic salary,");
   const benefits = prompt("Enter your benefits,");

    const details = calculateSalary(basicSalary, benefits);
    console.log('Gross Salary: KES' + details.grossSalary);
    console.log('PAYE: KES' + details.tax);
    console.log('NHIF Deduction: KES' + details.deduction1);
    console.log('NSSF Deduction: KES' + details.deduction2);
    console.log('Net Salary: KES' + details.salary);