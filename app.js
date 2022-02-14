// ---------------------------Function -------------------------------------
function updateNumber(product, price, isIncreasing) {
    const input = document.getElementById(product + '-number');
    let number = input.value;
    if (isIncreasing == true) {
        number = parseInt(number) + 1;
    }
    else if (number > 0) {
        number = parseFloat(number) - 1;
    }
    input.value = number;
    const total = document.getElementById(product + '-total');
    total.innerText = number * price;
};


// --------------------------Phone Section--------------------------------------
// --------------------Phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', 1219, true);
});
// --------------------Phone Minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1219, false);
});


// -----------------------Case Section-----------------------------------
// -------------------Case Plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', 59, true);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    // Update Price 
    // const CasePrice = document.getElementById('case-price');
    // CasePrice.innerText = 59 * caseInput.value;
});
// ------------------Case Minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseFloat(caseNumber) - 1;
    // Update Price 
    //     const CasePrice = document.getElementById('case-price');
    //     CasePrice.innerText = 59 * caseInput.value;
});

