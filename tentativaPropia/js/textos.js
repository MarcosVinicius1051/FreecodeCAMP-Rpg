export function textosArmazenados(num, weapons,gameStatus){
 const gameTextArmazem = {
        textInitial: `Bem vindo ao RPG MASCULO, sua missão é matar o dragão. \nMas vc esta muito fraco, então comece indo para a loja ou enfrentar monstros mais fracos na caverna!\n\nVocê possui em seu inventario: \nitem: ${weapons} \nouro: ${gameStatus} `,
        textVillage: "você esta no centro da vila, para onde vai agora?",
        textStoreOpen: `Voce entrou em uma loja, oq vai comprar?`,
        textStoreBuy: `você comprou tal coisa ` // relacionar com uma função para reber os valores de alguma arma ou de uma cura. 
    }
    switch (num){
        case 0: 
        return gameTextArmazem.textInitial;
        case 1: 
        return gameTextArmazem.textVillage;
        case 2: 
        return gameTextArmazem.textStoreOpen
    }
}
