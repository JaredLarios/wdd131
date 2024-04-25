const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

// For Loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT){
        console.log('[+] For value: ' + studentReport[i]);
    }
}

// While Loop
let i = 0;
while (i < studentReport.length) {
    const value = studentReport[i]
    if(value < LIMIT) {
        console.log('[+] While value: ' + value);
    }
    i = i + 1;
}

// For Each
studentReport.forEach((value) => {
    value < LIMIT? console.log('[+] ForEach value: ' + value): ''})

// For .. In
for(let i in studentReport) {
    const value = studentReport[i];
    value < LIMIT? console.log('[+] For ... In value: ' + value): '';
}