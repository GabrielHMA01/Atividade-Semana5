class Animal {
    constructor(name, idade){
        this.name = name
        this.idade = idade
    }

    descrever() {
        console.log(`Esta é a ${this.name}, que tem ${this.idade} anos de idade.`)
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade)
        this.cor = cor
    }

    miar() {
        console.log('Mimiau')
    }

}

const cachorro = new Animal('Meggie', 9)
const gagato = new Gato('Luna', 12) //gagato, pois é um gato gago

cachorro.descrever()
gagato.descrever()
gagato.miar()