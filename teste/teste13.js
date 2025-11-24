function calcular(){
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  let txtResultado = document.getElementById('resultado');
  const op = document.getElementById('op').value;
  let resultado;

  switch(op) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num2 !== 0 ? num1 / num2 : "Erro (divisão por zero)";
        break;
        }    

  txtResultado.textContent = `${num1} ${op} ${num2} = ${resultado}`;

}

function limpar(){
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('op').value = '+';
  document.getElementById('resultado').textContent = '';
}


