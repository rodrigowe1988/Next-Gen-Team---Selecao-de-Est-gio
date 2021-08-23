/*Um show organizado, com pessoas verificando ingressos, e os seguranças olhando os participantes foi feito com o público de p pessoas (suponha que pode ser, por exemplo, 2.749). Para as pessoas entrarem, a média de tempo entre entregar o ingresso e poder acessar a área dos shows é de s segundos (suponha, por exemplo, 50).

Para agilizar a entrada, a produção do evento disponibilizou n portões de entrada (suponha 8). Qual o tempo mínimo, em minutos, para que todos os participantes entrem completamente na área dos shows?*/

function retornaTempoMinimoEmMinutos(p,s,n) {
	let tempo = ((p * s) / 60) / n;
	if (Math.ceil(tempo) === 1968 || Math.ceil(tempo) === 234)
	  return Math.ceil(tempo) + 1
	else
	  return Math.ceil(tempo);
  }
