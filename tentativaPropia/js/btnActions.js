import * as variaveis from "./variaveisPrincipais.js"
import {textosArmazenados as textArmazem, weaponsArmazem} from "./textos.js"

//store

let weaponValueIndex = 0; 

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

function perderHp(){

}

function buyItems (gold,type,weapon){
    let hpReturn;

    if(type == "hp"){
        if(gold >=10){

            hpReturn = recuperarHp(parseInt(variaveis.hpCharacter.innerHTML));

            variaveis.text.innerHTML = textArmazem(3);
            
            gold = gold -10;

            return variaveis.goldCharacter.innerHTML = gold.toString(), hpReturn;
        }else{
            variaveis.text.innerHTML = textArmazem(4); 
        }
    }

    if(type == "weapon"){
        if(gold>=50){
            gold = gold - 50; 
            compraArmas(weapon);
            console.log(weapon)
            
            return variaveis.goldCharacter.innerHTML = gold;

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
    }else{
        weaponValueIndex++
    }
    setTimeout(() => {
        variaveis.text.innerHTML = textArmazem(2);
    }, 3000);
}

// cave 

function addClass(name){

}
function removeClass(name){
return name.classList.remove();
}
export function CaveBtn(){



    esconder(variaveis.btnDragon);
    esconder(variaveis.btnCave);
    esconder(variaveis.btnStore);

    nEsconder(variaveis.btnSlime);
    nEsconder(variaveis.btnCano);
    nEsconder(variaveis.btnVillage);
    
    variaveis.text.innerHTML = textArmazem(9);
}
