const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);
    // Сокрытие элементов
    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
            //Если меню скрыто то мы его показываем 
        if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            //Если меню показано то мы его скрываем
            menuElem.style.display = 'none';
        }
    });
    // При изменение размера экрана скрывается меню burgera
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });
};

export default burger;