let deNuevo;

do {
    let i = 0;

    while (i < 3) {
        const num = Math.floor(Math.random() * 3);

        const respuesta = prompt("Hola, ¿qué eliges: papel, piedra o tijera").toLowerCase();

        const respuestaIn = {
            "papel": 0,
            "piedra": 1,
            "tijera": 2
        };

        if (respuesta in respuestaIn) {
            const eleccion = respuestaIn[respuesta];
            console.log(eleccion);

            switch (num) {
                case 0: // papel
                    if (eleccion === 0) // papel
                        alert("Empate");
                    else if (eleccion === 1) // piedra
                        alert("Perdiste");
                    else if (eleccion === 2) // tijera
                        alert("Ganaste");
                    break;
                case 1: // piedra
                    if (eleccion === 0) // papel
                        alert("Perdiste");
                    else if (eleccion === 1) // piedra
                        alert("Empate");
                    else if (eleccion === 2) // tijera
                        alert("Ganaste");
                    break;
                case 2: // tijera
                    if (eleccion === 0) // papel
                        alert("Ganaste");
                    else if (eleccion === 1) // piedra
                        alert("Perdiste");
                    else if (eleccion === 2) // tijera
                        alert("Empate");
                    break;
                default:
                    alert("Opción no válida");
            }
        }

        console.log(num);

        i++;
    }

    deNuevo = prompt("¿Quieres volver a jugar?").toLowerCase();

} while (deNuevo === "si");

alert("El juego ha terminado");
