// Слайдер
const sliders = (slides, dir, prev, next) => {
    // Переменная которая отображает текущий слайд
    let slideIndex = 1,
        paused = false; 
     //Передача селекторов и получение переменных
    const items =document.querySelectorAll(slides);
          
          // Функция слайдов
          function showSlides(n){
            // Первый слайд
            if(n > items.length){
                slideIndex = 1;
            }
            // Последний слайд
            if(n < 1){
               slideIndex = items.length;
            }
            // Перебор слайдов, выбор нужного, скрытие неактивных
            items.forEach(item => {
                item.classList.add('animated');
                item.style.display = 'none';
            });

            // Активный слайд
            items[slideIndex - 1].style.display = 'block';
          }


          showSlides(slideIndex);

          function plusSlides(n){
            showSlides(slideIndex += n);
          }

    
          try {
            const prevBtn = document.querySelector(prev),
                  nextBtn = document.querySelector(next);
            // Если кнопки есть
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });
      
            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            });
        } catch(e){}


        // Функция автоматичческого слайдера и анимации
        function activateAnimation() {
          // Вертикальный слайдер 
          if (dir === 'vertical') {
              paused = setInterval(function() {
                  plusSlides(1);
                  items[slideIndex - 1].classList.add('slideInDown');
              }, 3000);
          } else {
            // Горизонтальный слайдер 
              paused = setInterval(function() {
                  plusSlides(1);
                  items[slideIndex - 1].classList.remove('slideInRight');
                  items[slideIndex - 1].classList.add('slideInLeft');
              }, 3000);
          }
      }
      activateAnimation();
  
        // При наведении мышки останавлвается слайдер
      items[0].parentNode.addEventListener('mouseenter', () => {
          clearInterval(paused);
      });
       // при пропадании мышки активируется слайдер
      items[0].parentNode.addEventListener('mouseleave', () => {
          activateAnimation();
      });
  

};

export default sliders;

