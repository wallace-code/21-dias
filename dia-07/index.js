// Criando variaveis
let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//note, sexo

while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno" ))
    sexo = parseInt(prompt("Digite o sexo do aluno: masc/fem "))

    if( sexo == "masc") {
        if( nota > maiorNotaHomens ) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if ( sexo == "fem" && nota > 7) {
        qtdMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram a nota acima de 7 foi: " + qtdMulheresAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
