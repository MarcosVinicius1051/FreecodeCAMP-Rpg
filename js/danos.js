
export function demageCalculator(demage){

    let val  = Math.floor(Math.random() * 5);

    switch(val+1){
        case 1: 
            demage = demage/10
        return parseInt(demage);
        case 2: 
        demage = demage/5
        return parseInt(demage);
        case 3: 
        demage = 3*demage/5
        return parseInt(demage);
        case 4: 
        demage = 4*demage/5
        return parseInt(demage);
        case 5: 
        return demage;
    }
}