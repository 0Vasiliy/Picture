//Отправка формы на сайт

// import chekNameinputs from "./chekNameinputs";
const forms = () => {
    // Получаем элементы
    const form = document.querySelectorAll('form'),  
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
        
        // Проверка на не число и удаление не верных данных
        // chekNameinputs('input[name="user_phone"]');
     
        // Создаём объект с сообщениями
    const message = {
        loading: 'Загрузка...',                      
        success: 'Спасибо! Скоро с вами свяжутся.',
        failure: 'Что то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    // Пути отправки данных
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

     // Функция отвечает за отправку запроса
    const postData = async (url, data) =>{                             
        let res = await fetch(url,{
            method: 'POST',
            body: data
        });
        return await res.text();
    }
  // Функция по очищению всех input
    const clearInputs = () =>{                                  
            inputs.forEach(item =>{
            item.value = '';
        });
        // Очищение всех элементов upload
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    };
    // Перебор всх инпутов
    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            // Разбивка строки на имя и после точки
            const arr = item.files[0].name.split('.');
            // Проверка на длинну имени
            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    //Перебор форм,обработчик событий sumbit
    form.forEach(item =>{
        item.addEventListener('submit',(e) =>{
            e.preventDefault();
                // Блок что показывает пользователю  сообщения
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            // Форма становится прозрачной
            item.classList.add('animated','fadeOutUp');
             //  Скрыть форму
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            // Отображение статуса сообщения

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src',message.spinner);
            statusImg.classList.add('animated','fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);

               
            // Собираем все данные из введёной формы
            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            // Отправляем запрос на сервер
            postData(api, formData)
            .then(res => {
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            })
            .catch(() => {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                }, 5000);
            });
    
        });
    });
};

export default forms;


 


