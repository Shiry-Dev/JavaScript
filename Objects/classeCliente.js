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

const gabriel = new Cliente("Gabriel", "12345678912", "teste@email.com",1000);
gabriel.depositar(100);

gabriel.exibirSaldo();
console.log("----------------------------");
console.log(gabriel);