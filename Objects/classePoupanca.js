class Cliente{
    constructor(nome, cpf, email, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class Poupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const pedro = new Poupanca("Pedro", "98765431212", "teste2@email.com", 1000, 200);
console.log(pedro);

pedro.depositar(50);
pedro.depositarPoupanca(25);

console.log(pedro);