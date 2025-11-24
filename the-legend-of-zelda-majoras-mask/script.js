document.getElementById('formCadastro').addEventListener('submit', function(event){
  event.preventDefault(); // impede o reload da página quando apertar submit
  nome = document.getElementById('nome');
  email = document.getElementById('email');
  senha = document.getElementById('senha');

  cNome = document.getElementById('cNome');
  cEmail = document.getElementById('cEmail');
  cSenha = document.getElementById('cSenha');

  confirmar = document.getElementById('confirmar');
  confirmar.style.display = 'block';

  cNome.textContent = nome.value;
  cEmail.textContent = email.value;
  cSenha.textContent = senha.value;
});

function limpar(){
  formulario = document.getElementById('formCadastro');
  confirmar = document.getElementById('confirmar');
  
  confirmar.style.display = 'none';
  formulario.reset();
}

function cadastrar(){
  resultado = document.getElementById('resultado');
  resultado.textContent = 'Cadastro Confirmado com Sucesso!';
  limpar();
}
function recusar(){
  resultado = document.getElementById('resultado');
  resultado.textContent = 'Cadastro Cancelado!';
  limpar();
}


 





