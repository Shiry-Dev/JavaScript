const cliente = {
    nome: "Gabriel",
    idade: 25,
    cpf: "12345678912",
    email: "teste@email.com",
    fones: ["11912341234","65912341234"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"
};

console.log(cliente);

cliente.dependentes.nome = "Sara Andrade";
console.log(cliente.dependentes.nome)

