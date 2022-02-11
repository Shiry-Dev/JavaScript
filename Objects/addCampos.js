const cliente = {
    nome: "Gabriel",
    idade: 25,
    cpf: "12345678912",
    email: "teste@email.com"
};
console.log(cliente);

//cria a chave, caso não exista, e passa o valor
cliente.fone = "11912341234";
console.log(cliente);

cliente.fone = "65912341234";
console.log(cliente);