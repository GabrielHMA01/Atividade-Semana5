class Animal {
    constructor(name, idade){
        this.name = name
        this.idade = idade
    }

    descrever() {
        console.log(`Esta é a ${this.name}, que tem ${this.idade} anos de idade.`)
    }
}

const cachorro = new Animal('Meggie', 9)
const gato = new Animal('Luna', 12)

cachorro.descrever()
gato.descrever()
