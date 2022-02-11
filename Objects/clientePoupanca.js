function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const pedro = new ClientePoupanca("Pedro","98765432109", "teste2@email.com", 1000, 200);

console.log(pedro);

ClientePoupanca.prototype.depositarPoupanca = function(valor){
    this.saldoPoupanca += valor;
}

pedro.depositarPoupanca(30);
console.log(pedro.saldoPoupanca);

