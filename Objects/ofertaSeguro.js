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

const propsClientes = Object.keys(cliente);
console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para: ${obj.nome}`);
    }else{
        console.log("Deu ruim")
    }
};

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);