//QUE DIA DA SEMANA SERÁ A X DIAS?
// OBS: HOJE É DOMINGO

function diasDaSemana(dias){
    const resto = dias % 7;

    if (resto == 0){
        document.write("Domingo")
    } else if (resto == 1){
        document.write("Segunda-feira")
    } else if (resto == 2){
        document.write("Terça-feira")
    } else if (resto == 3){
        document.write("Quarta-feira")
    } else if (resto == 4){
        document.write("Quinta-feira")
    } else if (resto == 5){
        document.write("Sexta-feira")
    } else if (resto == 6){
        document.write("Sábado")
    }
}

diasDaSemana(150)