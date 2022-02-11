const cliente = {
    nome: "Gabriel",
    idade: 25,
    cpf: "12345678912",
    email: "teste@email.com",
    fones: ["11912341234","65912341234"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Heitor",
    parentesco: "Filho", 
    dataNasc: "13/04/2020"
});

console.log(cliente.dependentes);

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "13/04/2020");
console.log(filhoMaisNovo[0].nome);