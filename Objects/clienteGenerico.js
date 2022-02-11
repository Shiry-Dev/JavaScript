function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const gabriel = new Cliente("Gabriel", "12345678912", "teste@email.com", 1000);

console.log(gabriel);

gabriel.depositar(30);

console.log(gabriel.saldo);

