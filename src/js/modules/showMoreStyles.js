import {getResource} from '../services/requests';

// Подгрузка дополнительных блоков,стилей через сервер
const showMoreStyles = (trigger, wrapper) =>{
    const btn = document.querySelector(trigger);
       
    btn.addEventListener('click', function() {
      getResource('http://localhost:3000/styles')
          .then(res => createCards(res))
          .catch(error => console.log(error));
      //Удаление кнопки после нажатия
      this.remove();
  });
        //Функция принимает ответ от сервера
  function createCards(response) {
    response.forEach(({src, title, link}) => {
        let card = document.createElement('div');

        card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    
        card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
        `;

        document.querySelector(wrapper).appendChild(card);
    });
};      

};

  export default showMoreStyles;

  //Local
// // Подгрузка дополнительных блоков,стилей
// // Передача параметров trigger(кнопка),styles(карточки)
// const showMoreStyles = (trigger, styles) =>{
//     const cards = document.querySelectorAll(styles),
//           btn = document.querySelector(trigger);

//           cards.forEach(card => {
//                 card.classList.add('amimated','fadeInUp')
//           });
//           // При клике классы убираются потом добавляются
//           btn.addEventListener('click', () =>{
//             cards.forEach(card => {
//                 card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
//                 card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
//           });
//           btn.style.display = 'none';
//         });

// };

// export default showMoreStyles;