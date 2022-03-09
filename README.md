# Jogo-Mentalista-HTML-CSS-e-JS-
Jogo simples usando em geral If e Else onde o sistema gera um número aleátorio e temos que tentar descobrir em 3 tentativas para desvendarmos as verdades do mundo.<br />
Projeto upado no Netlify : https://flamboyant-roentgen-4a4421.netlify.app/<br />
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

![image](https://user-images.githubusercontent.com/86562591/157553953-a573e44f-56df-4c0c-97ab-a39269fc4a75.png)
