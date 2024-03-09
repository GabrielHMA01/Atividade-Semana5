# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

**c) Imprime os números pares de 2 a 10.** // Correta

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

**A) let carro = new Carro("Toyota");** //Correto

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

**A) 18** //Correta

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) **![Uma imagem](assets/ex04_1.PNG)** //Correta

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) **![Uma imagem](assets/ex05_1.PNG)** // correta

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) **"Olá, meu nome é João. Olá, meu nome é Maria."** //Correta

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

## Resposta

```javascript
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

```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

## Resposta

```javascript
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
```


______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

## Resposta

```javascript
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
```

______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

## Resposta

```javascript
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
```