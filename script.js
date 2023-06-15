// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

// !!!!!!      MEU CÓDIGO A PARTIR DAQUI      !!!!!!
if (gender === "male") { //Se o candidado for do gênero masculino:
    if (height >= 1.70) { //Altura mínima de 1,70 metros;
        if (barReps >= 6 || barSeconds >= 15) {  //Pelo menos 6 repetições na barra ou duração mínima de 15 segundos;
            if (abs >= 41) {                      //Pelo menos 41 abdominais;
                if ((runDistance >= 3 * 1000 && runTime <= 60 * 12) || (runDistance >= 5 * 1000 && runTime <= 20 * 60)) { //Pelo menos 3km em no máximo 12 minutos de corrida ou pelo menos 5km em no máximo 20 minutos de corrida;
                    if ((swimDistance >= 100 && swimTime <= 1 * 60) || (diveTime <= 30)) { //Pelo menos 100 metros em no máximo 1 minuto de natação ou no máximo 30 segundos de mergulho;
                        passed = true; //Se o candidato do gênero masculino passou no teste, todos os condicionais foram executados.
                    }
                }
            }
        }
    }
} else if (gender === "female") { //Se o candidato for do gênero é feminino:
    if (height >= 1.60) { //Altura mínima de 1,60 metros;
        if (barReps >= 5 || barSeconds >= 12) {    //Pelo menos 5 repetições na barra ou duração mínima de 12 segundos;
            if (abs >= 41) { // Pelo menos 41 abdominais;
                if ((runDistance >= 4 * 1000 && runTime <= 15 * 60) || (runDistance >= 6 * 1000 && runTime <= 22 * 60)) { //Pelo menos 4km em no máximo 15 minutos de corrida ou pelo menos 6km em no máximo 22 minutos de corrida;
                    if ((swimDistance >= 100 && swimTime <= 1 * 60) || (diveTime <= 30)) { //Pelo menos 100 metros em no máximo 1 minuto de natação ou no máximo 30 segundos de mergulho;
                        passed = true; //Se o candidato do gênerofeminino passou no teste, todos os condicionais foram executados.
                    }
                }
            }
        }
    }
}


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
