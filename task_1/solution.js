function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    let message = productName 
    'за', 
     productPrice
     'теперь в корзине!';
     let string1 = message;
     
     console.log(message);
   
     return message;
        //Cоздайте переменную message
        //Присвойте переменной message значение переменной productName
        //Добавьте в конец переменной message пробел
        //Добавьте в конец переменной message текст 'за'
        //добавьте в конец переменной message пробел
        //Добавьте в конец переменной message значение переменной productPrice
        //Добавьте в конец переменной message пробел
        //Добавьте в конец переменной message текст 'теперь в корзине!'
        //Выведите переменную message в консоль
}

function addInCartCountChange(value) {
    let oldValue = value;
    let newValue = oldValue + 1;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = oldSum + difference;
    let newSumText = newSum + ' ₽ ';
    // замените склеивание, используемое в newSum Text на шаблонную строку
    return newSumText;
}