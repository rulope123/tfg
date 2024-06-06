document.addEventListener('DOMContentLoaded', function() {
    let detalles = document.getElementById('detalles');
    let cita = document.getElementById("cita");
    let select = document.getElementById("select");
    let selectedOption = '';
    let selectedDate = '';

    select.addEventListener("change", () => {
        detalles.innerHTML = '';
        cita.innerHTML = '';
    });

    window.mostrarAnimalesDisponibles = function(opcion) {
        let especie = document.getElementById('especie');
        let contenido = '';
        selectedOption = opcion;
        switch (opcion) {
            case 'vacunaciones':
                contenido = `
                    <h2>Animales disponibles para vacunar</h2>
                    <form id="formulario-vacunaciones" action="" method="POST">
                        <div class="form-group">
                            <input type="radio" name="consulta" id="perro" value="perro" onclick="mostrarDetalles('vacunaciones','perro')">
                            <label for="perro">Perro</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="consulta" id="gato" value="gato" onclick="mostrarDetalles('vacunaciones','gato')">
                            <label for="gato">Gato</label>
                        </div>
                    </form>
                `;
                break;
            case 'marcaje_electronico':
                contenido = `
                    <h2>Marcaje Electrónico</h2>
                    <form id="formulario-marcaje" action="" method="POST">
                        <div class="form-group">
                            <input type="radio" name="consulta" id="perro" value="perro"  onclick="opcionesCitasDisponibles()">
                            <label for="perro">Perro</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="consulta" id="gato" value="gato"  onclick="opcionesCitasDisponibles()">
                            <label for="gato">Gato</label>
                        </div>
                    </form>
                `;
                break;
            case 'desparasitaciones':
                contenido = `
                    <h2>Desparasitaciones</h2>
                    <form id="formulario-desparasitaciones" action="" method="POST">
                        <div class="form-group">
                            <input type="radio" name="consulta" id="perro" value="perro" onclick="mostrarDetalles('desparasitaciones','perro')">
                            <label for="perro">Perro</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="consulta" id="gato" value="gato" onclick="mostrarDetalles('desparasitaciones','gato')">
                            <label for="gato">Gato</label>
                        </div>
                    </form>
                `;
                break;
            case 'cirugia':
                contenido = `
                    <h2>Cirugía</h2>
                    <form id="formulario-cirugia" action="" method="POST">
                        <div class="form-group">
                            <input type="radio" name="consulta" id="perro" value="perro"  onclick="opcionesCitasDisponibles()">
                            <label for="perro">Perro</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="consulta" id="gato" value="gato"  onclick="opcionesCitasDisponibles()">
                            <label for="gato">Gato</label>
                        </div>
                    </form>
                `;
                break;
            default:
                contenido = '<p>Seleccione una opción para ver los detalles.</p>';
        }

        especie.innerHTML = contenido;
    }

    window.mostrarDetalles = function(opcion, especie) {
        let detalles = document.getElementById('detalles');
        let contenido = '';

        if (opcion == 'vacunaciones' && especie == 'perro') {
            contenido = `
                <h2>Vacunas disponibles para perros</h2>
                <form id="formulario-detalles-vacunaciones" action="" method="POST">
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Moquillo" value="Moquillo" onclick="opcionesCitasDisponibles()">
                        <label for="Moquillo">Moquillo</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Parvovirus" value="Parvovirus" onclick="opcionesCitasDisponibles()">
                        <label for="Parvovirus">Parvovirus</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Hepatitis" value="Hepatitis" onclick="opcionesCitasDisponibles()">
                        <label for="Hepatitis">Hepatitis</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Leptopirosis" value="Leptopirosis" onclick="opcionesCitasDisponibles()">
                        <label for="Leptopirosis">Leptopirosis</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Adenovirus" value="Adenovirus" onclick="opcionesCitasDisponibles()">
                        <label for="Adenovirus">Adenovirus</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Leishmaniosis" value="Leishmaniosis" onclick="opcionesCitasDisponibles()">
                        <label for="Leishmaniosis">Leishmaniosis</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Bordetella_bronchiseptica" value="Bordetella_bronchiseptica" onclick="opcionesCitasDisponibles()">
                        <label for="Bordetella_bronchiseptica">Bordetella bronchiseptica</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Rabia" value="Rabia" onclick="opcionesCitasDisponibles()">
                        <label for="Rabia">Rabia</label>
                    </div>
                </form>
            `;
        } else if (opcion == 'vacunaciones' && especie == 'gato') {
            contenido = `
                <h2>Vacunas disponibles para gatos</h2>
                <form id="formulario-detalles-vacunaciones" action="" method="POST">
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Panleucopenia_felina" value="Panleucopenia_felina" onclick="opcionesCitasDisponibles()">
                        <label for="Panleucopenia_felina">Panleucopenia felina</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Rinotraqueitis" value="Rinotraqueitis" onclick="opcionesCitasDisponibles()">
                        <label for="Rinotraqueitis">Rinotraqueitis</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Calicivirus" value="Calicivirus" onclick="opcionesCitasDisponibles()">
                        <label for="Calicivirus">Calicivirus</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Clamidias" value="Clamidias" onclick="opcionesCitasDisponibles()">
                        <label for="Clamidias">Clamidias</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Leucemia" value="Leucemia" onclick="opcionesCitasDisponibles()">
                        <label for="Leucemia">Leucemia</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="Rabia" value="Rabia" onclick="opcionesCitasDisponibles()">
                        <label for="Rabia">Rabia</label>
                    </div>
                </form>
            `;
        } else if (opcion == 'desparasitaciones' && (especie == 'perro' || especie == 'gato')) {
            contenido = `
                <h2>Tipo de desparasitación</h2>
                <form id="formulario-detalles-desparasitaciones" action="" method="POST">
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="desparasitacion1" value="Interna" onclick="opcionesCitasDisponibles()">
                        <label for="desparasitacion1">Desparasitación Interna</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" name="vacunas" id="desparasitacion2" value="Externa" onclick="opcionesCitasDisponibles()">
                        <label for="desparasitacion2">Desparasitación Externa</label>
                    </div>
                </form>
            `;
        }

        detalles.innerHTML = contenido;
    }

    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    }

    function showAvailableSlots(day) {
        const infoContainer = document.getElementById('infoContainer');
        const slots = [
            '9:00 / 10:00', '10:00 / 11:00', '11:00 / 12:00', '12:00 / 13:00',
            '13:00 / 14:00', '14:00 / 15:00', '15:00 / 16:00', '16:00 / 17:00'
        ];

        selectedDate = day;
        const storedSlots = JSON.parse(localStorage.getItem(selectedDate)) || [];

        let contenido = `
            <h1> Citas disponibles para el día ${selectedDate}</h1>
            <form id="formulario-citas" action="">
                <div class="column">
        `;

        slots.forEach((slot, index) => {
            if (index === 4) contenido += '</div><div class="column">'; // Create a new column after 4 slots
            const isDisabled = storedSlots.includes(slot) ? 'disabled' : '';
            contenido += `<button class="slot" ${isDisabled} data-slot="${slot}">${slot}</button>`;
        });

        contenido += `
                </div>
            </form>
        `;

        infoContainer.innerHTML = contenido;

        document.querySelectorAll('.slot').forEach(button => {
            button.addEventListener('click', function(ev) {
                ev.preventDefault();
                const slot = this.getAttribute('data-slot');
                this.setAttribute('disabled', true);

                storedSlots.push(slot);
                localStorage.setItem(selectedDate, JSON.stringify(storedSlots));
            });
        });
    }

    function renderCalendar(month, year) {
        const monthYearElement = document.getElementById('monthYear');
        const calendarBody = document.getElementById('calendarBody');

        monthYearElement.textContent = `${months[month]} ${year}`;
        
        calendarBody.innerHTML = '';

        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
                    cell.appendChild(document.createTextNode(''));
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.appendChild(document.createTextNode(date));
                    date++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    window.opcionesCitasDisponibles = function() {
        let cita = document.getElementById("cita");
        let contenido = `
        <h2>Lugar de la cita</h2>
        <form id="formulario-citas-disponibles" action="http://localhost:3000/cita" method="POST">
            <div class="form-group">
                <input type="radio" name="cita" id="urgencias" value="urgencias">
                <label for="urgencias">Urgencias</label>
            </div>
            <div class="form-group">
                <input type="radio" name="cita" id="domicilio" value="domicilio">
                <label for="domicilio">A domicilio</label>
            </div>
            <div class="form-group">
                <input type="radio" name="cita" id="clinica" value="clinica">
                <label for="clinica">Clinica</label>
            </div>
            <div class="calendar-container">
                <div class="navigation">
                    <h1 id="monthYear"></h1>
                </div>
                <button id="prev">←</button>
                <div class="month-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Lun</th>
                                <th>Mar</th>
                                <th>Mié</th>
                                <th>Jue</th>
                                <th>Vie</th>
                                <th>Sáb</th>
                                <th>Dom</th>
                            </tr>
                        </thead>
                        <tbody id="calendarBody">
                        </tbody>
                    </table>
                </div>
                <button id="next">→</button>
                <div id="infoContainer">
                </div>
                <button id="guardarCita">Enviar</button>
            </div>
        </form>
    `;
        cita.innerHTML = contenido;

        document.getElementById('prev').addEventListener("click", (ev) => {
            ev.preventDefault();
            prevMonth();
        });

        document.getElementById('next').addEventListener("click", (ev) => {
            ev.preventDefault();
            nextMonth();
        });

        renderCalendar(currentMonth, currentYear);

        const dias = document.getElementsByTagName("td");
        for (let i = 0; i < dias.length; i++) {
            dias[i].addEventListener("click", (ev) => {
                ev.preventDefault();
                showAvailableSlots(dias[i].innerHTML);
            })
        }

        document.getElementById("formulario-citas-disponibles").addEventListener("submit", (ev) => {
            ev.preventDefault();
            const usu = localStorage.getItem('usuario');
            const selectedConsulta = document.querySelector('input[name="consulta"]:checked').value;
            const selectedEspecificaciones = document.querySelector('input[name="vacunas"]:checked')?.value;
            const selectedCita = document.querySelector('input[name="cita"]:checked').value;
            console.log(selectedOption);
            const selectedAgno = document.getElementById('monthYear').innerText;
            const selectedSlot = document.querySelector('.slot[disabled]').getAttribute('data-slot');
            const fecha = selectedAgno + ' dia ' + selectedDate + ' ' + selectedSlot;
            let lugarcita_fk;
            let tipocita_fk;

            if(selectedCita == 'urgencias'){
                lugarcita_fk = 3
            }else if(selectedCita == 'domicilio'){
                lugarcita_fk = 1
            }else if(selectedCita == 'clinica'){
                lugarcita_fk = 2
            }

            if(selectedOption == 'vacunaciones'){
                tipocita_fk = 1
            }else if(selectedOption == 'desparasitaciones'){
                tipocita_fk = 3
            }else if(selectedOption == 'marcaje_electronico'){
                tipocita_fk = 2
            }else if(selectedOption == 'cirugia'){
                tipocita_fk = 4
            }

            let data = {
                usuario:usu,
                tipoCita:tipocita_fk,
                lugarCita: lugarcita_fk,
                animal:selectedConsulta,
                enfermedad:selectedEspecificaciones,
                fecha: fecha
            };

            console.log(data);

            fetch('http://localhost:3000/cita', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    };
});
