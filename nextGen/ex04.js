/**
 * A banda The XPTOs vai gravar o seu primeiro disco! Eles foram em vários estúdios de amigos e perceberam que, ao tocar, existia um eco em alguns deles. Alguns estudios que eles visitaram tinham 8, 16, 18, 24, 36 metros entre os amplificadores e as paredes opostas

Sabendo que as pessoas conseguem perceber o eco num tempo maior ou igual a 0,1s. Crie uma função que consiga determinar se há eco em um estudio de acordo com a distância entre os amplificadores e a parede oposta, considerando a velocidade do som como 340m/s?
 */

function retornaSeHaEcoNoEstudio(distancia) {
	if (distancia >= 17)
	  return true
	else
	  return false
  }
