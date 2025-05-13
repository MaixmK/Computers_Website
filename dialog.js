function dialogWithUser() {
    let quantity;
    
    // Цикл для перевірки введення
    do {
        quantity = prompt("Скільки відеокарт ви хочете додати в кошик? Введіть число:");

        if (quantity === null) {
            alert("Ви скасували введення.");
            break;
        }

        if (!isNaN(quantity) && quantity > 0) {
            alert(`Ви додали ${quantity} відеокарт(и) у кошик.`);
            break;
        } else {
            alert("Будь ласка, введіть правильну кількість відеокарт.");
        }
    } while (true);
}
