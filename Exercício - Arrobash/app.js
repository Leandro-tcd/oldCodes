// DICIONÁRIO EM CÓDIGO

// C = ###; U = ##@; B = #@#; A = #@@
// D = @##; E = @#@; M = @@#; Y = @@@

// MSG = #@@####@@@##@#@@@#@@@

solucao('#@@####@@@##@#@@@#@@@')

function solucao(textoCodificado){
    const dicionario = {
        '###': "C",
        '##@': "U",
        '#@#': "B",
        '#@@': "A",
        '@##': "D",
        '@#@': "E",
        '@@#': "M",
        '@@@': "Y"
    };
    
    let letraConv = ""
    
    for (let i = 0; i < textoCodificado.length; i += 3){
        const letra = (textoCodificado[i]+textoCodificado[i+1]+textoCodificado[i+2]);     
        letraConv += dicionario[letra]
    }
    document.write(letraConv)    
}


    //if (letra === '###'){
    //         letraConv += "C"
    //     } else if (letra === '##@'){
    //         letraConv += "U"
    //     } else if (letra === '#@#'){
    //         letraConv += "B"
    //     } else if (letra === '#@@'){
    //         letraConv += "A"
    //     } else if (letra === '@##'){
    //         letraConv += "D"
    //     } else if (letra === '@#@'){
    //         letraConv += "E"
    //     } else if (letra === '@@#'){
    //         letraConv += "M"
    //     } else if (letra === '@@@'){
    //         letraConv += "Y"
    //     }
    // }