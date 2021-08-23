/**
 *
 * A música é feita de sons, que são ondas sonoras que vibram em uma frequência. As notas musicais principais são dó, ré, mi, fá sol, lá, si, representadas por (C, D, E, F, G, A, B) nesta ordem.

A escala musical com estas sete notas principais e é subdividida em 12 notas com a distância entre duas notas consecutivas igual a 1/2 tom ou 1 semitom, pois entre Mi e Fá e Sí e Dó, não há sustenido/bemol (#, b). Desta forma a escala de semitons pode ser representada das seguintes formas:

Crescente
[C, C#, D, D#, E, F, F#, G, G#, A, A#, B]

Decrescente
[C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B]

image.png

O lá (A) central tem a frequência de 440 Hz (ou 440 ciclos por segundo).

Para avançar meio tom (para A#) a partir do A (440) é preciso fazer a operação 440*2^(1/12). Para ir para o B (ou seja, avançar dois meios-tons), é preciso, a partir do A (440), fazer 440*2^(2/12).

Monte uma função que retorne qual a frequência de qualquer nota sendo que valores positivos estão acima do A (440) e valores negativos estão abaixo do A (440), e diga qual o nome da nota (considerando a escala de tons e semitons acima, crescente ou decrescente de acordo com sua referência ao A (440)).

O formato da resposta deve ser um array de strings de duas posições, com a primeira sendo a frequência com 4 casas decimais sempre que o valor não for inteiro e a segunda qual nota esta frequência representa, exemplo: ['440', 'A'] ou ["466.1638", "A#"]} semitons
 * 
 */

function geraFrequenciaNota(semitons) {
	let arrayPositivo = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
	let arrayNegativo = ['A', 'Ab', 'G', 'Gb', 'F', 'E', 'Eb', 'D', 'Db', 'C', 'B', 'Bb']

	let frequencia = (440*2**(semitons/12)).toFixed(4);
	//essa parte do código que precisa ser acertada
	let nota = function() {
	  if (semitons >= 0) {
		if (semitons >= 12) {
		  return arrayPositivo[semitons % 12]
		}
		else
		  return arrayPositivo[semitons]
	  } else {
		  if (semitons <= - 12){
			return arrayNegativo[semitons * (-1) % 12]
		  }
		return arrayNegativo[semitons * (-1)]
	  }
	}

	let i = frequencia.length;
	if (frequencia[i - 4] == 0 && frequencia[i - 3] == 0 && frequencia[i - 2] == 0 && frequencia[i - 1] == 0) {
	  let teste = parseFloat(frequencia)
	  teste.toFixed(0)
	  frequencia = teste.toString()
	}
	let finalArray = [frequencia, nota()];
	return finalArray
  }
