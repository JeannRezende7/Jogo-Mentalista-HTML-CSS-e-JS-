# Jogo-Mentalista-HTML-CSS-e-JS-
Jogo simples usando em geral If e Else onde o sistema gera um número aleátorio e temos que tentar descobrir para desvendarmos as verdades do mundo.<br />
Projeto piloto : https://codepen.io/imersao-dev/pen/vYgBwoj?editors=1010
# Pequena Conversão 
- No imput eu coloco o .value para ja receber o valor <br />
- O ParseInt eu converto a string para inteiro, Ex: <br />

``
var chute = parseInt(document.getElementById("valor").value);
``

# Posso usar o comando Math.random() para gerar um número aleatório.
Quando eu faço esse comando ele puxa numero 0 quebrados, por exemplo 0.00123123123. <br />
Para eu puxar um numero de 0 a 10 por exemplo. Posso  fazer Math.random() *11 ele vai gerar números aleatorios. <br />
E ainda posso fazer um parseInt novamente para puxar só o numero inteiro como exemplo: <br />
``variavelX = parseInt(Math.random() *11)``
