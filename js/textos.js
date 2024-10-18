import * as variaveis from "./variaveisPrincipais.js"
export let weaponsArmazem = ["graveto","machado","espada Simples","espadaSagrada"];
export let weaponsDamege = [10,20,40,80]


export function textosArmazenados(num,weapons,gold,monster,demage){

    const gameTextArmazem = {

        textInitial: `Bem vindo ao RPG MASCULO, sua missão é matar o dragão. \nMas vc esta muito fraco, então comece indo para a loja ou enfrentar monstros mais fracos na caverna!\n\nVocê possui em seu inventario: \nitem: ${weapons} \nouro: ${gold} `,

        textVillage: "você esta no centro da vila, para onde vai agora?",

        textStoreOpen: `Você esta na loja! Oque vai comprar?`,

        textBuyHp: `Parabéns, você restaurou 10 de Hp!`,

        textBuyNotGold: `infelizmente vc não tem ouro o suficiente, vá para a caverna e ganhe mais! Talvez vc tire sorte grande...`,

        textBuyWeapon1: `Parabéns! voce comprou o ${weaponsArmazem[1]}, seu dano aumentou para ${weaponsDamege[1]}! `,

        textBuyWeapon2: `Parabéns! voce comprou a ${weaponsArmazem[2]}, seu dano aumentou para ${weaponsDamege[2]}! `,

        textBuyWeapon3: `Parabéns! voce comprou o ${weaponsArmazem[3]}, seu dano aumentou para ${weaponsDamege[3]}! `,

        textBuyNoWeapon: `infelizmente não há mais armas para comprar!`,

        textEnterCave: `cuidado, vc esta dentro da caverna! qual monstro vc vai enfrentar? Ou ira tentar explorar a caverna?`,

        textCavemonster: `Um ${monster} apareceu! ataque ou desvie!`,

        textEffectiveAttackInmMonster: "o ataque acertou!, -x de vida do montro",

        textNoEffectiveAttackInMonster: "O slime desvivou!",

        textMonsterCharacterAttack: `O ${monster} te atacou, voce perdeu ${demage} de vida! cuidado!`,

        texMonsterCharacterAttackDodge: "você esquivou do ataque do slime!",

        textDefeatMonster: `vc matou o ${monster}! vc ganhou 40 moedas!`,

        textDefeatCharacter: `vc morreu para o ${monster}.`,

        textRunCharacter: `vc fugiu do ${monster}`,

        textExploreCave: `Você esta explorando a caverna, cuidado com armadilhas! `,

        textExploreCaveLoading: `explorando`,

        textExploreCaveGold: `vc achou um bau do tesouro! você ganhou 60 de ouro`,

        textExploreCaveHp: `você caiu em uma armadilha! você perdeu 30hp`,

        textExploreCaveNothing: `você explorou a caverna... mas não achou nada`,

        textDodgeTrue: `você desviou do ataque do ${monster}`,

        textDodgeFalse: `você não conseguiu desviar do ataque do ${monster}, você perdeu ${demage}hp`,

        textTotalXp: `seu xp total foi: ${variaveis.xpCharacter.innerHTML}! Tente novamente em uma nova jornada!`


    }

    switch (num){
        case 0: 
        return gameTextArmazem.textInitial;
        case 1: 
        return gameTextArmazem.textVillage;
        case 2: 
        return gameTextArmazem.textStoreOpen
        case 3: 
        return gameTextArmazem.textBuyHp
        case 4: 
        return gameTextArmazem.textBuyNotGold
        case 5: 
        return gameTextArmazem.textBuyWeapon1
        case 6: 
        return gameTextArmazem.textBuyWeapon2
        case 7: 
        return gameTextArmazem.textBuyWeapon3
        case 8: 
        return gameTextArmazem.textBuyNoWeapon
        case 9: 
        return gameTextArmazem.textEnterCave
        case 10: 
        return gameTextArmazem.textCavemonster
        case 11: 
        return gameTextArmazem.textEffectiveAttackInmMonster
        case 12: 
        return gameTextArmazem.textNoEffectiveAttackInMonster
        case 13: 
        return gameTextArmazem.textMonsterCharacterAttack
        case 14: 
        return gameTextArmazem.texMonsterCharacterAttackDodge
        case 15: 
        return gameTextArmazem.textDefeatMonster
        case 16: 
        return gameTextArmazem.textDefeatCharacter
        case 17: 
        return gameTextArmazem.textRunCharacter
        case 18: 
        return gameTextArmazem.textExploreCaveLoading
        case 19: 
        return gameTextArmazem.textExploreCaveGold
        case 20: 
        return gameTextArmazem.textExploreCaveHp
        case 21: 
        return gameTextArmazem.textExploreCaveNothing
        case 22: 
        return gameTextArmazem.textDodgeTrue
        case 23: 
        return gameTextArmazem.textDodgeFalse
        case 24: 
        return gameTextArmazem.textTotalXp
    }
}
