const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// a função trim() remove quaisquer espaços em branco que a string tiver.
// close() é a função para encerrar o readline
// \n é uma quebra de linha 

// ---------------------- TESTE FUNCIONAL ---------------------- //

let arrayDeDados = [];
let resposta = "sair";

rl.question(`Insira sua lista do Css  \n`,
    (userInput) => {
        if (userInput.trim() == resposta) {
            rl.close();
            console.log("Você encerrou a lista sem quaisquer dados!")
        } else {
            rl.setPrompt('Insira o proxima linha \n');
            arrayDeDados.push(userInput.trim())
            rl.prompt();
            rl.on('line', (userInput) => {
                if (userInput.trim() == resposta) {
                    rl.close()
                    arrayDeDados.sort()
                    for (let i = 0; i < arrayDeDados.length; i++) {
                        console.log(arrayDeDados[i])
                    }
                    console.log("você encerrou sua lista os dados são = " + arrayDeDados.sort())
                } else {
                    rl.setPrompt('Insira a proxima linha ou digite sair para finalizar \n');
                    rl.prompt()
                    arrayDeDados.push(userInput.trim())
                }
            }
            )
        }
        rl.on('sair', () => {
            console.log("correto!")
        });
    }
)

//  -------------------------- TESTES FALHOS COM BUG ---------------------------------- //

/* let novoArray = [];
let pergunta = readline.question("Insira seus dados aqui!")

while(pergunta == "sair"){
   readline.stop()

   if(!(pergunta == "sair")){
    console.log(pergunta)
   console.log(novoArray.sort())
   }

};
*/


/*

while (resposta !== "sair") {

 resposta = rl.question('Digite sua propriedade', (resposta)=>{
if (!(resposta == "sair")){
    novoArray.push(resposta)
    rl.close;
}
 })
 
}
rl.on('close', () => {
    console.log(novoArray.sort())
}); */




