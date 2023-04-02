// Подгрузка дополнительных блоков,стилей
// Передача параметров trigger(кнопка),styles(карточки)
const showMoreStyles = (trigger, styles) =>{
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

          cards.forEach(card => {
                card.classList.add('amimated','fadeInUp')
          });
          // При клике классы убираются потом добавляются
          btn.addEventListener('click', () =>{
            cards.forEach(card => {
                card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
          });
          btn.style.display = 'none';
        });

};

export default showMoreStyles;