let balance = 0;

function checkBalance() {
    document.getElementById("message").innerText = "Your balance is:";
    document.getElementById("balance").innerText = "Balance: $" + balance;
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    if (amount && !isNaN(amount) && amount > 0) {
        balance += parseFloat(amount);
        alert("Deposit successful!");
        checkBalance();
    } else {
        alert("Invalid amount. Please try again.");
    }
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    if (amount && !isNaN(amount) && amount > 0) {
        if (balance >= amount) {
            balance -= parseFloat(amount);
            alert("Withdrawal successful!");
            checkBalance();
        } else {
            alert("Insufficient balance. Please try again.");
        }
    } else {
        alert("Invalid amount. Please try again.");
    }
}
