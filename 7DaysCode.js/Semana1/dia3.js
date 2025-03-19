const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escolha uma área para seguir na programação: Frontend ou Backend? ' ,(qualAreaProgramacao) => {
    
    const areaEscolhida = qualAreaProgramacao.trim().toLowerCase();

    switch (areaEscolhida) {
        case 'frontend':

            rl.question('Frontend, ótima escolha! Agora escolha: React ou Vue? ', (linguagemFront) => {

                rl.question('Boa! Você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? (opcao1) ou (opcao2) ', (escolhaOpcao1) => {

                    rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ')
                });
            });
            break;
        
        case 'backend': 

            rl.question('Backend, ótima escolha! Agora escolha: C# ou Java? ', (linguagemBack) => {

                rl.question('Boa! Você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? (opcao1) ou (opcao2) ', (escolhaOpcao2) => {

                    rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ')
                });
            });
            break;

        default:
            console.log('Ops! Algum erro, vamos tentar novamente');
            break;
    }

});