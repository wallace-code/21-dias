// Criando variaveis 
let temFome = prompt("Você tem fome? (sim/não)")
let temDinheiro = prompt("Você tem dinheiro? (sim/não)")
let restauranteAberto = prompt("O restaurante está aberto? (sim/não)")

// criando condições 
if (temFome === "não" || temDinheiro === "não"){
    console.log("Hoje a janta será em casa")
} else if( temDinheiro === "sim" && temFome === "sim"){
    console.log("Hoje o jantar vai ser no seu restaurante preferido")
} else {
    console.log("Peça um delivery")
}