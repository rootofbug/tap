document.addEventListener('DOMContentLoaded', () => {
    const coinButton = document.getElementById('coinButton');
    const balanceDisplay = document.getElementById('balance');
    let balance = 0;

    coinButton.addEventListener('click', () => {
        balance += 0.01;
        balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
    });
});
