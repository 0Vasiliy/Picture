// Замена изображений при наведении
const pictureSize = (imgSelector) =>{
    const blocks =document.querySelectorAll(imgSelector);

        // Функция которая показывает определённый img,когда мышка заходит на img
        function showImg(block){
            // Получение картинки из блока
            const img = block.querySelector('img');
            // Изменеие атрибута src и его замена
            img.src = img.src.slice(0, -4) + '-1.png';
            // Скрытие всех лишних элементов(паргафов)
            block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
        };
        /// Функция которая показывает скрывает img,когда мышка выходит из img
        function hideImg (block) {
            const img = block.querySelector('img');
            // Изменеие атрибута src и его замена
            img.src = img.src.slice(0, -6) + '.png';
            block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
                p.style.display = 'block';
            });
        }
    
        blocks.forEach(block => {
            block.addEventListener('mouseover', () => {
                showImg(block);
            });
            block.addEventListener('mouseout', () => {
                hideImg(block);
            });
        });
};

export default pictureSize;