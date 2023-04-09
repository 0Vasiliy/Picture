const accordeon = (triggersSelector,itemsSelector) =>{
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemsSelector);
    //Перебор и анимация аккодеона
    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });
    // Работа с тригерами(кнопками)
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Проверка является элемент на который мы нажали не активным и добавления класса
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });

};
export default accordeon;