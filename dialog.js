// dialog.js
function dialogWithUser() {
    let quantity;
    
    // Цикл для перевірки введення
    do {
        quantity = prompt("Скільки відеокарт ви хочете додати в кошик? Введіть число:");

        // Перевіряємо, чи ввів користувач число більше за 0
        if (quantity !== null && !isNaN(quantity) && quantity > 0) {
            alert(`Ви додали ${quantity} відеокарт(и) у кошик.`);
        } else if (quantity !== null) {
            alert("Будь ласка, введіть правильну кількість відеокарт.");
        }
    } while (quantity === null || isNaN(quantity) || quantity <= 0);  // Повторюємо, поки ввід не буде правильним
}