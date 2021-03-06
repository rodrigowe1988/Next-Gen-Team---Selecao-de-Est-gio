/**
 * Uma pesquisa feita com pessoas que iriam participar de um show com vários palcos, identificou que:

45% gostam de ver os shows no palco A.
33% gostam de ver os shows no palco B.
34% gostam de ver os shows no palco C.
20% gostam de ver os shows no palco A e B.
18% gostam de ver os shows no palco A e C.
10% gostam de ver os shows no palcos B e C.
3% gostam dos três locais para ver os shows.

Ajude a organização do show a entender qual o percentual de pessoas que não gostam de nenhum desses palcos e que gostam apenas de um único palco!
Se os ingressos fossem vendidos para 10 mil pessoas, quantas gostariam de shows de apenas um palco?
E se fosse para 17 mil pessoas, quantas pessoas gostariam de ver shows de apenas um palco?
 */

function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {
	let pessoasNaoGostam = quantidadePessoasEvento * 0.42;
	let pessoasGostamUmPalco = quantidadePessoasEvento * 0.25;
	return Math.trunc(pessoasGostamUmPalco)
  }
