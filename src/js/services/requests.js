   // Функция отвечает за отправку запроса
   const postData = async (url, data) =>{                             
    let res = await fetch(url,{
        method: 'POST',
        body: data
    });
    return await res.text();
}

   // Функция отвечает за отправку запроса
   const getResource = async (url) =>{                             
    let res = await fetch(url);

    //Если у нас что то пошло не так
    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}
export {postData, getResource};