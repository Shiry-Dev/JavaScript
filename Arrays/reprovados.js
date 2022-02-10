const nomes = ["João", "Juliana", "Caio", "Ana"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 7); 
console.log(`Reprovados> ${reprovados}`);