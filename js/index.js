tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const ordenes = [];
//Llenar la 2da tabla con los valores indicados en el menu
const cargarTabla = () =>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";

    for(let i = 0; i < ordenes.length; ++i){
        let p = ordenes[i];
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerText = p.nombre;
        
        let tdHorario = document.createElement("td");
        tdHorario.innerText = p.horario;

        let tdValor = document.createElement("td");
        tdValor.innerText = p.valor;

        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerHTML = p.descripcion;

        let tdOferta = document.createElement("td");
        let icono = document.createElement("i");
        if (p.horario == "Desayuno" && parseInt(p.valor) < 5000){
            //<i class="fas fa-angle-double-down"></i>
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");
    
        }else if(p.horario == "Almuerzo" && parseInt(p.valor) < 15000){
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");

        }else if(p.horario == "Once" && parseInt(p.valor) < 10000){
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");

        }else if(p.horario == "Cena" && parseInt(p.valor) < 20000){
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");

        }else{
            icono.classList.add("fas","fa-times","text-danger","fa-3x");
        }

        tdOferta.classList.add("text-center")
        tdOferta.appendChild(icono);

        
        tr.appendChild(tdNombre);
        tr.appendChild(tdHorario);
        tr.appendChild(tdValor);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdOferta);
        
        tbody.appendChild(tr);

    }
}

//<option value="desayuno">Desayuno</option>
//<option value="almuerzo">Almuerzo</option>
//<option value="once">Once</option>
//<option value="cena">Cena</option>

//Generar los Horarios en el HTML
const cargarHorarios = () =>{
    let thorario= document.querySelector("#horario-select");
    thorario.innerHTML = "";

    let desayuno = document.createElement("option");
    const Valor1 = "Desayuno";
    desayuno.value = Valor1;
    desayuno.text = Valor1;

    let almuerzo = document.createElement("option");
    const Valor2 = "Almuerzo";
    almuerzo.value = Valor2;
    almuerzo.text = Valor2;
    
    let once = document.createElement("option");
    const Valor3 = "Once";
    once.value = Valor3;
    once.text = Valor3;

    let cena = document.createElement("option");
    const Valor4 = "Cena";
    cena.value = Valor4;
    cena.text = Valor4;
    
    
    thorario.appendChild(desayuno);
    thorario.appendChild(almuerzo);
    thorario.appendChild(once);
    thorario.appendChild(cena);

}

cargarHorarios();

//Funcionamiento del boton registrar orden
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let horario = document.querySelector("#horario-select").value;
    let valor = document.querySelector("#valor-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    
    let menu = {};

    //Validar ingreso del nombre, horarios y los precios entre el valor minimo y maximo
    if ((nombre != "") && (nombre != " ")){
        if ((horario == "Desayuno") && (parseInt(valor) > 1000 && parseInt(valor) < 10000)){ 
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            console.log(menu);
            ordenes.push(menu); 
            cargarTabla();
            Swal.fire("Exito!","Registro de Menu realizado","success");
            
        }else if((horario == "Almuerzo") && (parseInt(valor) > 10000 && parseInt(valor) < 20000)){ 
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            console.log(menu);
            ordenes.push(menu); 
            cargarTabla();
            Swal.fire("Exito!","Registro de Menu realizado","success");
        }else if((horario == "Once") && (parseInt(valor) > 5000 && parseInt(valor) < 15000)){
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            console.log(menu);
            ordenes.push(menu); 
            cargarTabla();
            Swal.fire("Exito!","Registro de Menu realizado","success");
        }else if((horario == "Cena") && (parseInt(valor) > 15000)){
            menu.nombre = nombre;
            menu.horario = horario;
            menu.valor = valor;
            menu.descripcion = descripcion;
            console.log(menu);
            ordenes.push(menu); 
            cargarTabla();
            Swal.fire("Exito!","Registro de Menu realizado","success");
        }else{
            Swal.fire("Error","El valor no esta dentro del rango correspondiente al horario!","error");
        }
    }else{
        Swal.fire("Error","Debe ingresar un Nombre!","error");
    }
});
