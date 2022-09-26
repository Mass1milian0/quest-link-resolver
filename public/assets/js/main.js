host = window.location
const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input'); 
const body = document.querySelector('body');
const result = document.createElement('p');
//centering Div
const centerDiv = document.createElement('div');
centerDiv.style.display = 'flex';
centerDiv.style.justifyContent = 'center';
centerDiv.style.alignItems = 'center';
centerDiv.style.height = '20rm';
//copy link button
const copyBtn = document.createElement('button');
copyBtn.classList.add('copy-button');
copyBtn.textContent = 'Copy Link';
copyBtn.style.display = 'none';

centerDiv.appendChild(copyBtn);
body.appendChild(centerDiv);

copyBtn.addEventListener('click', () => {
    //select text in result and copy it
    const range = document.createRange();
    range.selectNode(result);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    //change button text
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy Link';
    }
    , 2000);
});

convertBtn.addEventListener('click', async() => {
    result.innerHTML = `${host}convert?${URLinput.value}`
    body.appendChild(result)
    copyBtn.style.display = 'block';
}); 
