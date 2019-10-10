class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome,
            this.segundoNome = segundoNome,
            this.primeiraNota = primeiraNota,
            this.segundaNota = segundaNota
    }

    nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4)
    }
    situacao() {
        if (this.media() > 6) {
            return 'aprovado'
        } else {
            return 'reprovado'
        }

    }
}

Aluno1 = new Aluno("douglas", "silva", 10, 4);
Aluno2 = new Aluno("marcos", "silva", 4, 4);
Aluno3 = new Aluno("jonathans", "silva", 10, 5);
Aluno4 = new Aluno("lucas", "lotif", 5, 8);
Aluno5 = new Aluno("jorge", "jesus", 7.6, 6);

var lista = [Aluno1, Aluno2, Aluno3, Aluno4];

for (i = 0; i < 5; i++) {
    alert(lista[i].nomeCompleto() + ' ' + lista[i].media() + ' ' + lista[i].situacao())

}