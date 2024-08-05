var pessoa = {
    nome: "João",
    idade: 17,
    genero: "masculino",
    cpf: "103.456.123-43",
    email: "joao@gmail",
    hobbies: ["VideoGames", "futebol", "bicicleta"],
    endereco: {
        rua: "Rua do senai",
        bairro: "Industrial",
        cidade: "São Jose"
    },
    saudacao: function () {
        //lembrando que o "this." é um referencial dentro do objeto, para não precisa escrever o nome do objeto toda hora
        console.log(typeof this.idade)//Para analizar qual o tipo da variavel, nesse exemplo ele é "number"
        let abrir = prompt("Digite o seu nome: ")
        this.idade = this.idade.toString()
        if (abrir === pessoa.nome) {
            alert("Olá " + this.nome + "! Bem vindo.\nVocê tem " + pessoa.idade + " anos\nE um dos seus hobbies favoritos é " + pessoa.hobbies[0])
            console.log(pessoa.endereco.rua)
            console.log(typeof pessoa.idade)//Para analizar a mudança da varialve, antes number, agora é "string"
        }
    }
}
/* console.log(pessoa.email)
delete pessoa.email
console.log(pessoa.email)//Se der "undefined" quer dizer que ele deletou o email */

var carro = {
    //Dentro desse objeto temos varios tipos de variaveis< como a:
    modelo: "Volkswagen Fusca",//string
    ano: 1970,//number
    usado: true,//booleano
    cor: ["azul", "vermelho", "amarelo"],//array
    dono: null,//type null
    local: {
        criacao: "Alemanha",
        venda: "Santa Catarina",
        donosAntigos: ["Danilo", "José Marcos", "Marcos"]
    },//objeto
    busca: function () {
        let eusado = ""
        if (carro.usado == true) {
            eusado = "sim"
        }
        this.toString(carro.ano)
        alert("Aqui estão todas as informações: \n- Modelo: " + this.modelo + ";\n- Cor: " + this.cor[0] + ";\n- Usado: " + eusado + ";\n- Ano de Criação: " + this.ano)
    }//função
}
/* console.log(carro.usado)
carro.usado = false
console.log(carro.usado) */


