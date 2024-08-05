// Criando variáveis 
let num1 = parseInt(prompt('Digite o número'))
let num2 = parseInt(prompt('Digite o número'))
let opcao = parseInt(prompt("Escolha qual operação matématica realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

// Criando SwitchCase
switch (opcao){
    case 1:
      console.log(num1 + " + " + num2 +  " = " + (num1 + num2))
      break;
    case 2:
      console.log(num1 + " - " + num2 + " = " + (num1 - num2))
      break;
    case 3:
      console.log(num1 + " * " + num2 + " = " + (num1 * num2))
      break;
    default:
      console.log(num1 + " / " + num2 + " = " + (num1 / num2))
      break;
}


