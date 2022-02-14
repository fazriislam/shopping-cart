// ---------------------------Phone & Case Function --------------------------
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }

    productInput.value = productNumber;
    const total = document.getElementById(product + '-total');
    total.innerText = productNumber * price;

    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    // const phoneNumber = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};




// ---------------------Total Function------------------------------

// --------------------------Phone Section--------------------------------------
// --------------------Phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
// --------------------Phone Minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// -----------------------Case Section-----------------------------------
// -------------------Case Plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    // Update Price 
    // const CasePrice = document.getElementById('case-price');
    // CasePrice.innerText = 59 * caseInput.value;
});
// ------------------Case Minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseFloat(caseNumber) - 1;
    // Update Price 
    //     const CasePrice = document.getElementById('case-price');
    //     CasePrice.innerText = 59 * caseInput.value;
});













