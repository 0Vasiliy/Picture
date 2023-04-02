const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(event){
        let matrix = '+7 (___) ___ __ __',
        i = 0,
        // Статичное получение-не цифры,глобально,замещать пустым местом, работает на основе матрицы
        def = matrix.replace(/\D/g, ''),
         // Динамичное получение-не цифры,глобально,замещать пустым местом,работает на основе того что ввел пользователь
        val = this.value.replace(/\D/g, '');
        // Если пользователь пробуеют удалить(+7), то облом
        if(def.length >= val.length){
            val=def;
        }
        // Устанавливется value
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        // Очищается value
        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
            // Устанавливается курсор
        }else {
                setCursorPosition(this.value.length, this);
            }
    }
    // Получаем элементы на которую хотим установить маску
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

    export default mask;

