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
    },{
        nome: "Heitor",
        parentesco: "Filho", 
        dataNasc: "13/04/2020"
    }],

    saldo:100,

    depositar: function(valor){
    this.saldo += valor;
    }

};

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
        relatorio += `${info} ===> ${cliente[info]}\n`
    }
};

console.log(relatorio);