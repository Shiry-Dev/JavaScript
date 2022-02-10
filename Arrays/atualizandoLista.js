const listaDeChamada = ["João", "Ana", "Caio", "Marjorie", "Leo"];

//splice(inicializa depois de uma casa, exclui o proximo dois valores, oq será adicionado no lugar)
listaDeChamada.splice(1, 2, "Rodrigo");
//listaDeChamada.splice(2, 0 , "Rodrigo") -> adiciona o Rodrigo depois da Ana 
console.log(`A nova lista de chamada é: ${listaDeChamada}`);
//joao, rodrigo, marjorie, leo