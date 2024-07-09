const loader = document.querySelector('.loader');
loader.style.display = 'flex'; 
loader.style.justifyContent = 'center';
loader.style.alignItems = 'center';

const p = document.querySelector('p');
const button = document.querySelector('button');

const ChangeText = () => {
    p.textContent = "wong edan";
}

const alertText = () => {
    alert('Will I alert');
}
button.addEventListener('click', ChangeText);
button.addEventListener('click', alertText);


