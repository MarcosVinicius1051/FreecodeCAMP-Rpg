import * as variaveis from "./variaveisPrincipais.js"
import {textosArmazenados as textArmazem, weaponsArmazem, weaponsDamege} from "./textos.js"
import { monsterDemage } from "./monsters.js";

//essenciais

let weaponValueIndex = 0; 

function addClass(name,classe){
    return name.classList.add(classe);
}
function removeClass(name,classe){
return name.classList.remove(classe);
}

function esconder(el){
    return el.classList.add("esconder"); 
}

function nEsconder(el){
    return el.classList.remove("esconder");
}

function recuperarHp(hp){
    hp = hp+10; 
    return variaveis.hpCharacter.innerHTML = hp;
}

function perderHp(hp,type,demage){
    hp = parseInt(hp);
    if(type == 0){
        hp = hp-demage;
        return variaveis.hpCharacter.innerHTML = hp; 
    }
    if(type == 1){
        if(hp-demage < 0){
            variaveis.monsterHp.innerHTML = '0';
            return 0;
        }
        if(hp>0){
            hp = hp - demage; 
            return variaveis.monsterHp.innerHTML = hp;
        }
    }
}

function pagamento(type,gold){
    console.log(gold)
    if(type == "slime"){
        gold = gold+40; 
        return variaveis.goldCharacter.innerHTML = gold;
    }
    if(type == "cano"){
        gold = gold+80; 
        return variaveis.goldCharacter.innerHTML = gold;
    }
    if(type == "dragon"){
        gold = gold+200; 
        return variaveis.goldCharacter.innerHTML = gold;
    }
}


// store
function buyItems (gold,type,weapon){
    let hpReturn;

    if(type == "hp"){
        if(gold >=10){

            hpReturn = recuperarHp(parseInt(variaveis.hpCharacter.innerHTML));

            variaveis.text.innerHTML = textArmazem(3);
            
            gold = gold -10;

            return variaveis.goldCharacter.innerHTML = gold.toString();
        }else{
            variaveis.text.innerHTML = textArmazem(4); 
        }
    }

    if(type == "weapon"){
        if(gold>=50){
            gold = gold - 50; 
            compraArmas(weapon);
            console.log(weapon)
            variaveis.goldCharacter.innerHTML = gold;
            return 

        }else{
            variaveis.text.innerHTML = textArmazem(4);
        }
    }
}

function compraArmas(weapon){

    switch (weapon){
        case 0:
            variaveis.text.innerHTML = textArmazem(5);
            return variaveis.weapons.innerHTML = weaponsArmazem[1];
        case 1: 
            variaveis.text.innerHTML = textArmazem(6);
            return variaveis.weapons.innerHTML = weaponsArmazem[2]; 
        case 2: 
            variaveis.text.innerHTML = textArmazem(7);  
            return variaveis.weapons.innerHTML = weaponsArmazem[3];
        case 3: 
            variaveis.text.innerHTML = textArmazem(8);
            return variaveis.weapons.innerHTML = weaponsArmazem[3];
    }
}


export function villageBtn(){


    nEsconder(variaveis.btnStore);
    nEsconder(variaveis.btnCave);
    nEsconder(variaveis.btnDragon);
    
    esconder(variaveis.btnStoreWeapon);
    esconder(variaveis.btnHpStore);
    esconder(variaveis.btnVillage); 
    esconder(variaveis.btnCano);
    esconder(variaveis.btnSlime)

    variaveis.text.innerHTML = textArmazem(1);
}

export function storeBtn(){
    esconder(variaveis.btnDragon);
    esconder(variaveis.btnCave);
    esconder(variaveis.btnStore);

    nEsconder(variaveis.btnStoreWeapon);
    nEsconder(variaveis.btnHpStore);
    nEsconder(variaveis.btnVillage);

    variaveis.text.innerHTML = textArmazem(2);
}

export function buyHp(){
    buyItems(parseInt(variaveis.goldCharacter.innerHTML),"hp");
    setTimeout(()=>{
        variaveis.text.innerHTML = textArmazem(2);
    },3000)
}

export function buyWeapon(){
    buyItems(parseInt(variaveis.goldCharacter.innerHTML),"weapon",weaponValueIndex);
    if(weaponValueIndex >= 3){
        weaponValueIndex = 3
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000);
    }else{
        weaponValueIndex++
        setTimeout(() => {
            variaveis.text.innerHTML = textArmazem(2);
            
        }, 3000)
    }
    return weaponsDamege[weaponValueIndex]
   
    
}

// cave 



export function CaveBtn(){
    esconder(variaveis.btnAttack);
    esconder(variaveis.btnRun);
    esconder(variaveis.btnDodge)
    esconder(variaveis.btnDragon);
    esconder(variaveis.btnCave);
    esconder(variaveis.btnStore);

    nEsconder(variaveis.btnSlime);
    nEsconder(variaveis.btnCano);
    nEsconder(variaveis.btnVillage);
    
    variaveis.text.innerHTML = textArmazem(9);
}


export function slimeBtn(){

    addClass(variaveis.containeractions,"MonsterOn");
    removeClass(variaveis.containerMonster,"esconder");

    esconder(variaveis.btnCano);
    esconder(variaveis.btnSlime);
    esconder(variaveis.btnVillage); 

    nEsconder(variaveis.btnAttack);
    nEsconder(variaveis.btnDodge);
    nEsconder(variaveis.btnRun);

    variaveis.text.innerHTML = textArmazem(10,false,false,"slime")
}

export function characterAttack(type,demage,monsterDemag){
    let valHp = perderHp(variaveis.monsterHp.innerHTML,type,demage);
    if(valHp >0){
        setTimeout(()=>{
            monsterAttack(0,monsterDemag); 
            variaveis.text.innerHTML = textArmazem(13,false,false,false,monsterDemag)
        },200)

    }
    if(valHp == 0){
        variaveis.text.innerHTML = textArmazem(15,false,false,"slime")
        pagamento(variaveis.monsterName.innerHTML.toString(),parseInt(variaveis.goldCharacter.innerHTML))
        setTimeout(()=>{
            CaveBtn() //arrumar esse sistema referente ao design do sistema XD 
        },3000)
    }
}


//Monster Attack

function monsterAttack(type,demage){
    perderHp(variaveis.hpCharacter.innerHTML,type,demage)
}
















export function runBtn(){
    removeClass(variaveis.containeractions,"MonsterOn");
    addClass(variaveis.containerMonster,"esconder");

    //terminar de fazer sistema de fuga; 
}



