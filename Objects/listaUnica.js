const clientes = [{
    nome: "Gabriel",
    idade: 25,
    cpf: "12345678912",
    email: "teste@email.com",
    fones: ["11912341234","65912341234"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    },{
        nome: "Heitor",
        parentesco: "Filho", 
        dataNasc: "13/04/2020"
    }],
    },{
    nome:"Juliana",
    cpf: "98765432109",
    email: "teste2@email.com",
    dependentes: [{
        nome: "Pedro",
        parentesco: "Filho",
        dataNasc: "20/03/2011"
    }],
    }
]

//...(operador de espalhamento)
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];
console.log(listaDependentes);