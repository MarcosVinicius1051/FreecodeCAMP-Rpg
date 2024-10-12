
export let weaponsArmazem = ["graveto","machado","espada Simples","espadaSagrada"];
export let weaponsDamege = [10,20,40,80]

export function textosArmazenados(num, weapons,gameStatus){

    const gameTextArmazem = {

        textInitial: `Bem vindo ao RPG MASCULO, sua missão é matar o dragão. \nMas vc esta muito fraco, então comece indo para a loja ou enfrentar monstros mais fracos na caverna!\n\nVocê possui em seu inventario: \nitem: ${weapons} \nouro: ${gameStatus} `,

        textVillage: "você esta no centro da vila, para onde vai agora?",

        textStoreOpen: `Você esta na loja! Oque vai comprar?`,

        textBuyHp: `Parabéns, você restaurou 10 de Hp!`,

        textBuyNotGold: `infelizmente vc não tem ouro o suficiente, vá para a caverna e ganhe mais! Talvez vc tire sorte grande...`,

        textBuyWeapon1: `Parabéns! voce comprou o ${weaponsArmazem[1]}, seu dano aumentou para ${weaponsDamege[1]}! `,

        textBuyWeapon2: `Parabéns! voce comprou a ${weaponsArmazem[2]}, seu dano aumentou para ${weaponsDamege[2]}! `,

        textBuyWeapon3: `Parabéns! voce comprou o ${weaponsArmazem[3]}, seu dano aumentou para ${weaponsDamege[3]}! `,

        textBuyNoWeapon: `infelizmente não há mais armas para comprar!`,

        textEnterCave: `cuidado, vc esta dentro da caverna! qual monstro vc vai enfrentar?`,

        textCaveSlime: `Um slime apareceu! ataque ou desvie!`,

        textEffectiveAttackInSlime: "o ataque acertou!, -x de vida do slime",

        textNoEffectiveAttackInSlime: "O slime desvivou!",

        textSlimeCharacterAttack: "O slime te atacou, voce perdeu x de vida! cuidado!",

        texSlimeCharacterAttackDodge: "você esquivou do ataque do slime!",

        textDefeatMonster: "vc matou o monstro! vc ganhou xx moedas!",

        textDefeatCharacter: "vc morreu para o monstro... tente novamente..."


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
        return gameTextArmazem.textCaveSlime
        case 11: 
        return gameTextArmazem.textEffectiveAttackInSlime
        case 12: 
        return gameTextArmazem.textNoEffectiveAttackInSlime
        case 13: 
        return gameTextArmazem.textSlimeCharacterAttack
        case 14: 
        return gameTextArmazem.texSlimeCharacterAttackDodge
        case 15: 
        return gameTextArmazem.textDefeatMonster
        case 16: 
        return gameTextArmazem.textDefeatCharacter

    }
}
