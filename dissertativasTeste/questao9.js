class SomadorDeNotas{
    constructor(total){
        this.total = 0
    }

    adicionarNota(nota){
        this.total += nota
    }

    verTotal(){
        console.log(`A soma de notas 1 e 2 é de ${this.total} pontos`)
    }
}

var somador = new SomadorDeNotas()

somador.adicionarNota(9)
somador.adicionarNota(7)

somador.verTotal()