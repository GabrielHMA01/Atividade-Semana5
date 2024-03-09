class Funcionario{ // Define a classe Funcionario
    constructor(nome,idade,salarioBase){ // Define o construtor da classe Funcionario com parâmetros nome, idade e salarioBase
        this.nome = nome // Adiciona o atributo nome com o valor passado como parâmetro
        this.idade = idade // Adiciona o atributo idade com o valor passado como parâmetro
        this.salarioBase = salarioBase // Adiciona o atributo salarioBase com o valor passado como parâmetro
    }

    calcularSalario(){ // Define o método calcularSalario da classe Funcionario
        return this.salarioBase // Retorna o valor do atributo salarioBase
    }
}

class Professor extends Funcionario{ // Define a classe Professor que herda da classe Funcionario
    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana, salarioTotal){ // Define o construtor da classe Professor com parâmetros nome, idade, salarioBase, disciplina, horasAulaSemana e salarioTotal
        super(nome, idade, salarioBase) // Chama o construtor da classe pai (Funcionario) passando os parâmetros correspondentes
        this.disciplina = disciplina // Inicializa o atributo disciplina com o valor passado como parâmetro
        this.horasAulaSemana = horasAulaSemana // Inicializa o atributo horasAulaSemana com o valor passado como parâmetro
        this.salarioTotal = salarioTotal // Inicializa o atributo salarioTotal com o valor passado como parâmetro
    }

    calcularSalario(){ // Define o método calcularSalario da classe Professor
        this.salarioTotal = this.horasAulaSemana * 500 * 4 // Calcula o salarioTotal baseado no número de horas de aula por semana
        console.log(`O nome do professor de ${this.disciplina} é ${this.nome}, seu salário é de R$${(this.salarioTotal + this.salarioBase).toFixed(2)} por mês. Ele tem ${this.idade} anos de idade e trabalha ${this.horasAulaSemana} horas por semana.`) // Dá informações sobre o professor, incluindo o salário total calculado
    }
}

let professor01 = new Professor('Egon', 40, 10000, 'Negócios', 40 , 0) // Cria uma instância (objeto) da classe Professor com os parâmetros especificados
let professor02 = new Professor('Cris', 18, 150000, 'Programação', 500, 0) // Cria outra instância (objeto) da classe Professor com os parâmetros especificados

professor01.calcularSalario() // Chama o método calcularSalario para o professor01
professor02.calcularSalario() // Chama o método calcularSalario para o professor02