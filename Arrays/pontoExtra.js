const notas = [10, 9, 8, 7, 6];

//map não necessita de uma array nova, ela mesmo atualiza a própria array 
//++nota -> faz a incrementação primeiro e depois devolve o valor
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);