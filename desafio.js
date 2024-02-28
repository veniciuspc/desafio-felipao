const prompt = require('prompt-sync')();

for (let i = 0; i < 2; i++) {        
    var nome = prompt("Digite o nome do Herói: ");    
    var experiencia = prompt("Digite a experiencia do herói: ");
    
    if( experiencia < 1000){
        nivel = "Ferro";
    }                   
    else if ( experiencia > 1001 && experiencia < 2000){
        nivel = "Broze";
    }
    else if ( experiencia > 2001 && experiencia < 5000){
        nivel = "Prata";
    }
    else if ( experiencia > 5001 && experiencia < 8000){
        nivel = "Ouro";
    }
    else if ( experiencia >8001 && experiencia < 9000){
        nivel = "Diamante";
    }
    else if ( experiencia > 9001 && experiencia < 10000){
        nivel = "Lendario";
    }
    else if( experiencia >= 10001){
        nivel = "Imortal";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);           
}
