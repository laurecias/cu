alert('salve');
let nomeUsuario = prompt('como você está?');
let anterior = document.querySelector('#sexo');

anterior.textContent = nomeUsuario; 

while(nomeUsuario == ""){
    nomeUsuario = prompt('como você está?')
}