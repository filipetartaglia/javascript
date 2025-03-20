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

                const formalizaLinguagemFront = linguagemFront.trim().toLowerCase();

                if (formalizaLinguagemFront == 'react') {

                    rl.question('React, está em alta no mercado! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao1) => {

                        if (escolhaOpcao1 == '1'){

                            rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ', (quaisTec1) => {
                                console.log('top');
                            });
                        } else if (escolhaOpcao1 == '2') {
                            rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ', (quaisTec1) => {
                                console.log('top2');
                            });
                        }
                    });
                } else {

                    rl.question('Vue, ótimo está crescendo bastante! Agora escolha: você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? opção(1) ou opção(2) ', (escolhaOpcao2) => {

                        if (escolhaOpcao2 == '1') {
                            rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ', (quaisTec2) => {
                                console.log('show');
                            });
                        }
                    });
                }

                
            });
            break;
        
        case 'backend': 

            rl.question('Backend, ótima escolha! Agora escolha: C# ou Java? ', (linguagemBack) => {

                rl.question('Boa! Você quer se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? (opcao1) ou (opcao2) ', (escolhaOpcao2) => {

                    rl.question('E por fim, quais são as tecnologias nas quais você gostaria de se especializar? ', (quaisTec2) => {

                    });

                });
            });
            break;

        default:
            console.log('Ops! Algum erro, vamos tentar novamente');
            process.exit();
            break;
            
    };
});