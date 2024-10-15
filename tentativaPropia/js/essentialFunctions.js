import * as variaveis from "./variaveisPrincipais.js"
import {textosArmazenados as textArmazem, weaponsArmazem, weaponsDamege} from "./textos.js"
import * as script from './script.js';

// funções essenciais. 


export function addClass(name,classe){
    return name.classList.add(classe);
}

export function removeClass(name,classe){
return name.classList.remove(classe);
}


export function esconder(el){
    return el.classList.add("esconder"); 
}

export function nEsconder(el){
    return el.classList.remove("esconder");
}

export function recuperarHp(hp){
    hp = hp+10; 
    return variaveis.hpCharacter.innerHTML = hp;
}

export function perderHp(hp,type,demage,monsterName){
    hp = parseInt(hp);
    if(type == 0){
        if(hp-demage <= 0){
            variaveis.hpCharacter.innerHTML = '0';
            variaveis.text.innerHTML = textArmazem(16,false,false,monsterName);
            return hp-demage; 
        }
        if(hp>0){
            hp = hp - demage; 
            return variaveis.hpCharacter.innerHTML = hp;
        }

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

export function pagamento(type,gold){
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

export function buyItems (gold,type,weapon){
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
            weapon =compraArmas(weapon);
            variaveis.goldCharacter.innerHTML = gold;
            return weapon

        }else{
            variaveis.text.innerHTML = textArmazem(4);
        }
    }
}


function compraArmas(weapon){

    switch (weapon){
        case 0:
            variaveis.text.innerHTML = textArmazem(5);
            variaveis.weapons.innerHTML = weaponsArmazem[1];
            weapon = weapon+1
            return weapon
        case 1: 
            variaveis.text.innerHTML = textArmazem(6);
            variaveis.weapons.innerHTML = weaponsArmazem[2]; 
            weapon = weapon+1
            
            return weapon
        case 2: 
            variaveis.text.innerHTML = textArmazem(7);  
            variaveis.weapons.innerHTML = weaponsArmazem[3];
            weapon = weapon+1
            return weapon
        case 3: 
            variaveis.text.innerHTML = textArmazem(8);
            variaveis.weapons.innerHTML = weaponsArmazem[3],variaveis.btnStoreWeapon.disabled = true;
            weapon = 3
            return weapon
    }
}