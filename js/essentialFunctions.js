import * as variaveis from "./variaveisPrincipais.js"
import {textosArmazenados as textArmazem, weaponsArmazem, weaponsDamege} from "./textos.js"
import * as script from './script.js';
import { monsterDemage } from "./monsters.js";

// funções essenciais. 

export function xpAdd(type){
    let xp = parseInt(variaveis.xpCharacter.innerHTML);
switch (type){
    case "hp":
        xp = xp+15
        return variaveis.xpCharacter.innerHTML=xp
    case "weapon1":
        xp = xp+30
        return variaveis.xpCharacter.innerHTML=xp
    case "weapon2":
        xp = xp+50
        return variaveis.xpCharacter.innerHTML=xp
    case "weapon3":
        xp = xp+70
        return variaveis.xpCharacter.innerHTML=xp
    case "attack":
        xp = xp+10
        return variaveis.xpCharacter.innerHTML=xp
    case "dodge":
        xp = xp+40
        return variaveis.xpCharacter.innerHTML=xp
    case "killSlime":
        xp = xp+60
        return variaveis.xpCharacter.innerHTML=xp
    case "killCano":
        xp = xp+100
        return variaveis.xpCharacter.innerHTML=xp
    case "killDragon":
        xp = xp+500
        return variaveis.xpCharacter.innerHTML=xp
    case "caveExplorate":
        xp = xp+50
        return variaveis.xpCharacter.innerHTML=xp
    case "CaveExplorateGold":
        xp = xp+150
        return variaveis.xpCharacter.innerHTML=xp

}
}

export function textoMudar(text,time){
    setTimeout(() => {
        addClass(text,"textoAparecer"); 
    }, time);
  
    removeClass(text,"textoAparecer");
}

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
    xpAdd("hp");
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
            addClass(variaveis.hpCharacter,"danoHp")
            variaveis.hpCharacter.innerHTML = hp;
            setTimeout(()=>{
                removeClass(variaveis.hpCharacter,"danoHp")
            },1000)
            return 
        }

    }
    if(type == 1){
        if(hp-demage < 0){
            variaveis.monsterHp.innerHTML = '0';
            return 0;
        }
        if(hp>0){
            hp = hp - demage; 
            addClass(variaveis.monsterHp,"danoHp")
            variaveis.monsterHp.innerHTML = hp;
            setTimeout(()=>{
                removeClass(variaveis.monsterHp,"danoHp")
            },1000)
            

            return variaveis.monsterHp.innerHTML = hp;
        }
    }
}

export function pagamento(type,gold){
    let goldInicial = gold;
    console.log(gold)
    if(type == "slime"){
        xpAdd(type)
        gold = gold+40; 
        variaveis.goldCharacter.innerHTML = gold;
        return gold-goldInicial;
    }
    if(type == "cano"){
        xpAdd(type)
        gold = gold+80; 
        variaveis.goldCharacter.innerHTML = gold;

        return gold-goldInicial;
    }
    if(type == "dragon"){
        xpAdd(type)
        gold = gold+200; 
        variaveis.goldCharacter.innerHTML = gold;
     
        return gold-goldInicial;
    }
    if(type == "parFoda"){
        xpAdd("CaveExplorateGold")
        gold = gold+60
        variaveis.goldCharacter.innerHTML = gold;
        
        return gold-goldInicial;
    }
}

export function buyItems (gold,type,weapon,xp){
    let hpReturn;

    if(type == "hp"){
        if(gold >=10){
            playAudio(variaveis.spendGoldAudio);

            hpReturn = recuperarHp(parseInt(variaveis.hpCharacter.innerHTML));

            variaveis.text.innerHTML = textArmazem(3);
            
            gold = gold -10;

            return variaveis.goldCharacter.innerHTML = gold.toString();
        }else{
            variaveis.text.innerHTML = textArmazem(4); 
        }
    }


    if(type == "weapon"){
        if(gold<50){
            variaveis.text.innerHTML = textArmazem(4);
        }
        if(gold>=50){
            playAudio(variaveis.spendGoldAudio);
            gold = gold - 50; 
            weapon =compraArmas(weapon);
            variaveis.goldCharacter.innerHTML = gold;
            return weapon

        }
        
    }
}


function compraArmas(weapon){

    switch (weapon){
        case 0:
            xpAdd("weapon1")
            variaveis.text.innerHTML = textArmazem(5);
            variaveis.weapons.innerHTML = weaponsArmazem[1];
            weapon = weapon+1
            return weapon
        case 1: 
            xpAdd("weapon2")
            variaveis.text.innerHTML = textArmazem(6);
            variaveis.weapons.innerHTML = weaponsArmazem[2]; 
            weapon = weapon+1
            return weapon
        case 2: 
            xpAdd("weapon3")
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

// cave exploration
export function loading(carre,i=0,n=0,hp = variaveis.hpCharacter.innerHTML){ 

    i++;
    n++;
    
    variaveis.btnAll.map((el)=>{
        addClass(el,"teste")
    })

    variaveis.text.innerHTML =  carre
    if(i<=4){
        setTimeout(() => {
            carre = carre + "."
            return carre,loading(carre,i,n)
           
        }, 400);
    }
    else{
        if(n<8){
            setTimeout(() => {
                variaveis.btnAll.map((el)=>{
                    removeClass(el,"teste")
                })
            }, 4500);
            
            
            return loading(textArmazem(18),0,n) 
        }else{
            setTimeout(() => {
                variaveis.btnAll.map((el)=>{
                    removeClass(el,"teste")
                })
            }, 4500);
            return  caveTreasures(hp)
        }
    }
}


function caveTreasures(hp){
    let val  = Math.floor(Math.random() * 11);
   
    if (val%2 == 0){
        if(val%4 == 0){
            playAudio(variaveis.caveWinAudio)
            pagamento("parFoda",parseInt(variaveis.goldCharacter.innerHTML));
            variaveis.text.innerHTML=textArmazem(19);
            setTimeout(() => {
                variaveis.btnExplore.disabled = false
                variaveis.btnCano.disabled = false
                variaveis.btnSlime.disabled = false
                variaveis.btnVillage.disabled = false
                variaveis.text.innerHTML = textArmazem(9);
            }, 3000);
        }else{
            playAudio(variaveis.caveNothingAudio)
            variaveis.text.innerHTML=textArmazem(21);
            setTimeout(() => {
                variaveis.btnExplore.disabled = false
                variaveis.btnCano.disabled = false
                variaveis.btnSlime.disabled = false
                variaveis.btnVillage.disabled = false
                variaveis.text.innerHTML = textArmazem(9);
            }, 3000)
        }
    }else{
        playAudio(variaveis.caveLoseAudio)
        perderHp(hp,0,30,"armadilha")
        variaveis.text.innerHTML=textArmazem(20);
        setTimeout(() => {
            variaveis.btnExplore.disabled = false
            variaveis.btnCano.disabled = false
            variaveis.btnSlime.disabled = false
            variaveis.btnVillage.disabled = false
            variaveis.text.innerHTML = textArmazem(9);
        }, 3000)
    }
}

let contador=0;

export function playAudio( audio, time){
   
    audio.currentTime = 0.1
    audio.volume = 0.5;

    if(contador != 0){
        audio.play();
    }else{

        audio.play();
        setTimeout(()=>{
            audio.pause();
           
        },2000)
        contador++;
    }
    if(time){
        audio.play();
        setTimeout(()=>{
            audio.pause();
           
        },time)
    }

}


export function monsterAudioDead(name){
    console.log(`nome; ${name}`);
    switch(name){
        case "slime":
            playAudio(variaveis.slimeAudioDead);
        break;
        case "cano":
            playAudio(variaveis.canoAudio);
        break;
        case "pombo":
            playAudio(variaveis.pomboAudioDead);
        break;
    }
}


export function morteDoPombo(){
    setTimeout(()=>{
        variaveis.text.innerHTML = textArmazem(25)  
    },2000)

    
    nEsconder(variaveis.imgPomboMorreu)
    playAudio(variaveis.audioVitoriaFinal)
        
    variaveis.btnAttack.disabled = true;
    variaveis.btnDodge.disabled = true;
    variaveis.btnRun.disabled = true; 

    variaveis.btnAll.map((el)=>{
        addClass(el,"teste")
    })
    setTimeout(()=>{
    esconder(variaveis.imgPomboMorreu);
    },5000)

}