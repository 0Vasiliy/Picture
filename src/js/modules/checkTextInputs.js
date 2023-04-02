// Заполнение имени и комментария - только на русском языке.
const checkTextInputs = (selector) =>{
    // Получение элементов
    const txtInputs = document.querySelectorAll(selector);
    // Перебор элементов
    txtInputs.forEach(input =>{
        // Отслеживаем когда пользователь нажал клавишу
        input.addEventListener('keypress', function(e){
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;