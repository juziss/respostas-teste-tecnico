function identifyLightBulbs() {
    let interruptor1 = true;  
    let interruptor2 = false; 
    let interruptor3 = false; 

    let lampada1 = "desconhecida"; 
    let lampada2 = "desconhecida"; 
    let lampada3 = "desconhecida"; 

    let temperaturaLampada1 = interruptor1 ? "quente" : "fria"; 
    let temperaturaLampada2 = interruptor2 ? "quente" : "fria"; 
    let temperaturaLampada3 = "fria"; 

    if (temperaturaLampada1 === "quente" && temperaturaLampada2 === "quente") {
        lampada1 = "Interruptor 1"; 
        lampada2 = "Interruptor 2"; 
        lampada3 = "Interruptor 3"; 
    } else if (temperaturaLampada1 === "quente") {
        lampada1 = "Interruptor 1";
        lampada2 = "Interruptor 2";
        lampada3 = "Interruptor 3";
    } else if (temperaturaLampada2 === "quente") {
        lampada2 = "Interruptor 2";
        lampada1 = "Interruptor 1";
        lampada3 = "Interruptor 3";
    } else {
        lampada1 = "Interruptor 1";
        lampada2 = "Interruptor 2";
        lampada3 = "Interruptor 3";
    }

    console.log("Lâmpada 1 está controlada por: " + lampada1);
    console.log("Lâmpada 2 está controlada por: " + lampada2);
    console.log("Lâmpada 3 está controlada por: " + lampada3);
}

identifyLightBulbs();
