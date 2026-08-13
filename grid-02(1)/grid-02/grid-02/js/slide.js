//pegar o elemento fazer o clone e passar a constante   
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);  


//colocar elemnto clonado dentro do container novo
document.querySelector('.logos').appendChild(cloneSlide);