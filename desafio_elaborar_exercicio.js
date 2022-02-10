//             Purrinha
// Faça um jogo de Purrinha. O jogo funciona assim:
//     - O Jogador escolhe um número de 0 a 5;
//     - O Pc escolhe um número de 0 a 5;
//     - O Jogador faz um palpite da soma dos valores (0 a 10)
//     - O Pc faz um palpite da soma dos valores (0 a 10)
//     - Ganha o palpite mais próximo do resultado.

// O jogo precisa ter:

//     - Jogador declara o nº de partidas;
//     - A cada rodada, o placar deve ser exibido;
//     - No final exiba o vencedor

const prompt = require('prompt-sync')();

let placar = [0,0];
let rodadas = 0;
let escolhaPlayer = 0;
let escolhaPc = 0;
let palpitePlayer = 0;
let palpitePc = 0;
let diferencaPlayer = somaPalpite - escolhaPlayer;
let diferencaPc = somaPalpite - escolhaPc;
var somaPalpite = escolhaPc + escolhaPlayer;

// se player ganhar => placar[0]++
// se pc ganhar => placar[1]++

console.log(
    `            Purrinha
    Faça um jogo de Purrinha. O jogo funciona assim:
        - O Jogador escolhe um número de 0 a 5;
        - O Pc escolhe um número de 0 a 5;
        - O Jogador faz um palpite da soma dos valores (0 a 10)
        - O Pc faz um palpite da soma dos valores (0 a 10)
        - Ganha o palpite mais próximo do resultado.
    
    `)

while(true){
    rodadas = +prompt(`Digite o número de rodadas que gostaria de jogar: `)
    if (isNaN(rodadas) || rodadas < 1){
        console.log(`Número Inválido.`)
    } else{
        break;
    }
}

do{
    while(true){
        escolhaPlayer = +prompt(`Digite um número de 0 a 5: `);
        if (isNaN(escolhaPlayer) || escolhaPlayer < 0 || escolhaPlayer > 5){
            console.log(`Número Inválido.`);
        } else{
            break;
        }
    }
    console.log()
    escolhaPc = Math.floor(Math.random()*6)
    // console.log(`O seu número foi ${escolhaPlayer}, o Pc escolheu ${escolhaPc}`)

    while(true){
        console.log()
        palpitePlayer = +prompt(`O Pc já escolheu o seu número, digite quanto você acha que vai dar o somatório:  `);
        if (isNaN(palpitePlayer) || palpitePlayer < 0 || palpitePlayer > 10){
            console.log(`Número Inválido.`);
        } else{
            break;
        }
    }
    palpitePc = Math.floor(Math.random()*11)

    somaPalpite = escolhaPc + escolhaPlayer;

    console.log(
        `
        Seu palpite foi ${palpitePlayer}, o palpite do PC foi ${palpitePc}
        
        O seu número foi ${escolhaPlayer}, o número do Pc foi ${escolhaPc}
        
        A somatória ${somaPalpite}`)

    diferencaPlayer = somaPalpite - palpitePlayer;
    diferencaPc = somaPalpite - palpitePc;

    if(diferencaPc < 0){
        diferencaPc *= -1;
    }
    if(diferencaPlayer < 0){
        diferencaPlayer *= -1;
    }
    if(diferencaPc < diferencaPlayer){
        console.log(
            `
            O Pc chegou Mais perto.
            `);
        placar[1]++;
    }else if(diferencaPc > diferencaPlayer){
        console.log(
            `
            Você chegou Mais perto.
            `);
        placar[0]++;
    }else{
        console.log(
            `
            Vocês empataram, ninguém pontua
            `)
    }
    

    rodadas--
}while(rodadas > 0)
    console.log(
        `
        O placar geral foi:
        
        Você: ${placar[0]}      Pc:${placar[1]}`)

    if (placar[0] > placar[1]){
        console.log(
            `
            Parabéns você foi o Campeão!!!!
            `)
    }else if (placar[0] < placar[1]){
        console.log(
            `
            Não foi dessa vez, o PC ganhou!
            `)
    }else{
        console.log(
            `
            A disputa foi acirrada, vocês empataram.
            `)
    }