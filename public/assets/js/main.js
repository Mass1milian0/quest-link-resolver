host = window.location
const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input'); 
const body = document.querySelector('body');
const result = document.createElement('p');
convertBtn.addEventListener('click', async() => {
    result.innerHTML = `${host}/convert?url=${URLinput.value}`
    body.appendChild(result)
}); 
