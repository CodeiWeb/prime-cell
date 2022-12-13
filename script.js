const btnmobile = document.getElementById('btn-mobile'); // selecionando o id btn-mobile que esta no html


function clicouNoMenu() { // função '' clicouNoMenu''
  const nav = document.getElementById('nav'); // selecionando o id nav
  nav.classList.toggle('active') // Adicione a class 'active' caso não tenha esta função, caso tenha remova a class 'active' 
}


btnmobile.addEventListener('click', clicouNoMenu ) // evento ao clicar ative a função '' clicouNoMenu''