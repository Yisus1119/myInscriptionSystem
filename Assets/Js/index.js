const Name = document.getElementById("name");
const Providence = document.getElementById("providence");
const City = document.getElementById("city");
const Area = document.getElementById("area")
const Street = document.getElementById("street");
const Career = document.getElementById("tipoCarrera");

/*
const valorName = Name.value;
const valorProvidence = Providence.value;
const valorCity = Providence.value;
const valorArea = Area.value;
const valorStreet = Street.value;
const valorCareer = Career.value;
*/




const DAYS = {
    '1': 'Lunes',
    '2': 'Martes',
    '3': "Miércoles",
    '4': "Jueves",
    '5': "Viernes",
    '6': "Sábado"
}

function nextForm() {
    if (Validate()) {

        if (Career.value == "Software") {
            saveCache();
            window.location.href = "../Html/Seleccion.html";

        } if (Career.value == "Ciberseguridad") {
            saveCache();
            window.location.href = "../Html/Seleccion2.html";
        } if (Career.value == "Redes") {
            saveCache();
            window.location.href = "../Html/Seleccion3.html";
        } if (Career.value == "Multimedia") {
            saveCache();
            window.location.href = "../Html/Seleccion4.html";
        } if (Career.value == "Mecatronica") {
            saveCache();
            window.location.href = "../Html/Seleccion5.html";
        }
    } else {
        alert("Hay campos vacidos.");
    }
}


function confirmarSeleccion() {
     
    if(confirm("¿Desea terminar la selección?")) {
        
        window.location.href = "../Html/index.html";
        alert("Selección completada sastifactoriamente.")
    }
    
    
}


function guardarSeleccion() {

    let subjects = document.querySelectorAll('.accordion-item')
    let data = document.querySelectorAll('.form-check')

    let counter = 0

    let dateArr = []

    for (const iterator of data) {
        let child = iterator.children
        let date = child[1].firstChild

        if (child[0].checked) {
            let dayNumber = child[1].firstChild.className.split(',')

            dayNumber.forEach(e => {
                dateArr.push({
                    dayName: DAYS[e] + ' ' + child[1].childNodes[1].textContent.replaceAll(' ', '').replace('\n', ' '),
                    dayNumber: e,
                    subject: subjects[counter].children[0].children[0].innerText
                })
            })

            counter++
        }
    }
    sessionStorage.setItem("fechas", JSON.stringify({ dates: dateArr }));
    window.location.href = "../Html/Confirmacion.html";

}

function crearColumna(dayNumber, subject, dayName) {
    let counter = 1

    let tr = document.createElement('tr')
    let td = document.createElement('td')

    td.innerText = subject

    tr.appendChild(td)


    while (counter < 7) {


        if (parseInt(dayNumber) == counter) {
            let td = document.createElement('td')
            td.innerText = dayName

            tr.appendChild(td)

        } else {
            let td = document.createElement('td')
            td.innerText = ''

            tr.appendChild(td)
        }

        counter++
    }

    //console.log(tr)
    return tr
}

function PonerDatos() {
    let items = document.querySelectorAll('.item-base')

    let datos = JSON.parse(sessionStorage.getItem("datos"));

    datos = Object.values(datos)

    let counter = 0

    for (const item of items) {
        item.innerText += ' ' + datos[counter]
        counter++
    }
}

function cambiarSeleccion() {
    const datos = JSON.parse(sessionStorage.getItem("datos"));


    if (datos.career == "Software") {
        document.getElementById('select_subject').href = "../Html/Seleccion.html";
        console.log('asdsadsadas')
    }
    if (datos.career == "Ciberseguridad") {
        document.getElementById('select_subject').href = "../Html/Seleccion2.html";
        console.log('asdsadsadas')
    }
    if (datos.career == "Redes") {

        document.getElementById('select_subject').href = "../Html/Seleccion3.html";
        console.log('asdsadsadas')
    }
    if (datos.career == "Multimedia") {

        document.getElementById('select_subject').href = "../Html/Seleccion4.html";
    }
    if (datos.career == "Mecatronica") {

        document.getElementById('select_subject').href = "../Html/Seleccion5.html";
    }


}

function crearTabla() {
    let table = document.getElementsByTagName('table')

    cambiarSeleccion()

    PonerDatos()

    const datos = JSON.parse(sessionStorage.getItem("fechas"));



    for (const iterator of datos.dates) {

        //console.log(crearColumna(iterator.dayNumber, iterator.subject, iterator.dayName))



        table[0].children[1].appendChild(crearColumna(iterator.dayNumber, iterator.subject, iterator.dayName))


    }

}

crearTabla()


function limpiarCampos() {
    Name.value = "";
    Name.classList.remove("input-error");
    Name.classList.remove("input-success");
    Name.focus();

    Providence.value = "";
    Providence.classList.remove("input-error");
    Providence.classList.remove("input-success");
    Providence.focus();

    City.value = "";
    City.classList.remove("input-error");
    City.classList.remove("input-success");
    City.focus();

    Area.value = "";
    Area.classList.remove("input-error");
    Area.classList.remove("input-success");
    Area.focus();

    Street.value = "";
    Street.classList.remove("input-error");
    Street.classList.remove("input-success");
    Street.focus();

    Career.value = "";
    Career.classList.remove("input-error");
    Career.classList.remove("input-success");
    Career.focus();

}

function saveCache() {
    const datos = {
        name: Name.value,
        providence: Providence.value,
        city: City.value,
        area: Area.value,
        street: Street.value,
        career: Career.value
    };

    sessionStorage.setItem("datos", JSON.stringify(datos));
};

function restoreCache() {
    const datos = JSON.parse(sessionStorage.getItem("datos"));
    if (datos) {
        Name.value = datos.name;
        Providence.value = datos.providence;
        City.value = datos.city;
        Area.value = datos.area;
        Street.value = datos.street;
        Career.value = datos.career;
    }

}


function Validate() {
    let isValid = true;

    const valorName = Name.value;
    const valorProvidence = Providence.value;
    const valorCity = Providence.value;
    const valorArea = Area.value;
    const valorStreet = Street.value;
    const valorCareer = Career.value;

    if (valorName == "" || valorName == null || valorName == undefined) {
        isValid = false;
        Name.classList.add("input-error");
        Name.classList.remove("input-success");
    } else {
        Name.classList.add("input-success");
        Name.classList.remove("input-error");
    }

    if (valorProvidence == "" || valorProvidence == null || valorProvidence == undefined) {
        isValid = false;
        Providence.classList.add("input-error");
        Providence.classList.remove("input-success");
    } else {
        Providence.classList.add("input-success");
        Providence.classList.remove("input-error");
    }

    if (valorCity == "" || valorCity == null || valorCity == undefined) {
        isValid = false;
        City.classList.add("input-error");
        City.classList.remove("input-success");
    } else {
        City.classList.add("input-success");
        City.classList.remove("input-error");
    }

    if (valorArea == "" || valorArea == null || valorArea == undefined) {
        isValid = false;
        Area.classList.add("input-error");
        Area.classList.remove("input-success");
    } else {
        Area.classList.add("input-success");
        Area.classList.remove("input-error");
    }

    if (valorStreet == "" || valorStreet == null || valorStreet == undefined) {
        isValid = false;
        Street.classList.add("input-error");
        Street.classList.remove("input-success");
    } else {
        Street.classList.add("input-success");
        Street.classList.remove("input-error");
    }

    if (valorCareer == "" || valorCareer == null || valorCareer == undefined) {
        isValid = false;
        Career.classList.add("input-error");
        Career.classList.remove("input-success");
    } else {
        Career.classList.add("input-success");
        Career.classList.remove("input-error");
    }

    return isValid;
}