const nomeAlunos = ["João", "Juliana", "Caio", "Ana"];
const mediaAlunos = [10, 7, 9 ,6]

let listaDeNotasDosAlunos = [alunos, mediaAlunos];

//recebe o nome de aluno e procura se dentro da primeira lista tem aquele nome, caso tenha ele pega o indice do nome e pega a nota na segunda lista com o mesmo indice
const exibeNomeNota = (nomeAluno) => {
    if(listaDeNotasDosAlunos[0].includes(nomeAluno)){
        let indice = listaDeNotasDosAlunos.indexOf(nomeAluno);
        return listaDeNotasDosAlunos[0][indice] + "sua média é:" + listaDeNotasDosAlunos[1][indice];
    }else{
        return "Aluno não encontrado!";
    }
}

console.log(exibeNomeNota("Ana"));
console.log(exibeNomeNota("Caio"));
console.log(exibeNomeNota("Nemo"));