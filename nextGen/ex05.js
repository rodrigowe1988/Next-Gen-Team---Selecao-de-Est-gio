/**
 * 6 amigos (Ana, Bia, Cadu, Duda, Edu e Fabi) tem uma banda de rock, moram próximos ao centro da cidade. O mapa é o que está aqui abaixo, mostrando onde cada um mora.

Eles sempre revezam os ensaios cada dia na casa de um integrante e costumam tocar em um pub no lugar P.

Crie uma função que calcule a soma da quantidade de quilômetros são percorridos no total pelos participantes, permitindo que seja informado a quantidade de rodadas de ensaios e shows que a banda fez.

Suponha a distância das laterais dos quarteirões são de 250m e desconsidere a largura das ruas.


 *
 * @param {*} numeroRodadaEnsaios
 * @param {*} numeroShows
 * @returns
 */

function calculaDistanciaBandaPercorre(numeroRodadaEnsaios,numeroShows) {
	let distEnsaios = numeroRodadaEnsaios * 35000;
	let distPub = numeroShows * 10500;

	return distEnsaios + distPub;
  }
