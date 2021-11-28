function getInputValue (inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
}

function updateTotal (TotalId, newAmount) {
    const total = document.getElementById(TotalId);
    const totalText = total.innerText;
    const oldTotal = parseFloat(totalText);
    total.innerText = oldTotal + newAmount;
}

function getCurrentBalance (totalBalanceId) {
    const currentBalance = document.getElementById(totalBalanceId);
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmound = parseFloat(currentBalanceText);
    return currentBalanceAmound;
}

function updateBalance(balanceId, newAmount, isAdd) {
    const currentBalanceId = document.getElementById(balanceId);
    const currentBalance = getCurrentBalance(balanceId);
    if (isAdd == true) {
        currentBalanceId.innerText = currentBalance + newAmount;
    }
    else {
        currentBalanceId.innerText = currentBalance - newAmount;
    }
}

// manage deposit
document.getElementById('deposit-button').addEventListener('click', function() {
    const newDeposit = getInputValue('deposit-input');
    if (newDeposit > 0) {
        updateTotal ('deposit-total', newDeposit);
        updateBalance ('balance-total', newDeposit, true)
    }
});

// manage withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const wantToWithdraw = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance('balance-total');
    if (wantToWithdraw < currentBalance && wantToWithdraw > 0) {
        updateTotal ('withdraw-total', wantToWithdraw);
        updateBalance ('balance-total', wantToWithdraw, false);
    }
});