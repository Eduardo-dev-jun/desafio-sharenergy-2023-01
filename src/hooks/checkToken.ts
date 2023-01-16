export default function CheckToken(){
  /////////Retira o token e retorna a pagina de login////////////
if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.pathname = '/'
}


/////////Verifica inatividade do usuario//////////////////////

let timer:NodeJS.Timeout;

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;


function removeToken(){
  localStorage.removeItem('token')
  window.location.reload()
}

function resetTimer(){
  clearTimeout(timer);
  timer = setTimeout(removeToken, 600000)
}

}