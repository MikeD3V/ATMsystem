let balance = 5000;

document.getElementById('withdraw').addEventListener('click', function() {
    let amount = prompt('Enter the amount to withdraw:');
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
    } else if (amount > balance) {
        alert('Not enough account balance.');
    } else {
        showLoading(() => {
            balance -= amount;
            updateMessage(`Withdrawn: ${amount} PHP<br>New Balance: ${balance} PHP`);
        });
    }
});

document.getElementById('deposit').addEventListener('click', function() {
    let amount = prompt('Enter the amount to deposit:');
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
    } else {
        showLoading(() => {
            balance += amount;
            updateMessage(`Deposited: ${amount} PHP<br>New Balance: ${balance} PHP`);
        });
    }
});

document.getElementById('checkBalance').addEventListener('click', function() {
    showLoading(() => {
        updateMessage(`Current Balance: ${balance} PHP`);
    });
});

function updateMessage(msg) {
    document.getElementById('message').innerHTML = msg;
}

function showLoading(callback) {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        callback();
    }, 1000); 
}
