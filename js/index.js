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
        if (p.horario == "desayuno" && parseInt(p.valor) < 5000){
            //<i class="fas fa-angle-double-down"></i>
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");
    
        }else if(p.horario == "almuerzo" && parseInt(p.valor) < 15000){
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");

        }else if(p.horario == "once" && parseInt(p.valor) < 10000){
            icono.classList.add("fas","fa-angle-double-down","text-success","fa-3x");

        }else if(p.horario == "cena" && parseInt(p.valor) < 20000){
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
        
        //Agregar el tr a la tabla
        tbody.appendChild(tr);

    }
}


  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    
    let nombre = document.querySelector("#nombre-txt").value;
    let horario = document.querySelector("#horario-select").value;
    let valor = document.querySelector("#valor-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    
    
    if ((horario == "desayuno") && (parseInt(valor) > 1000 && parseInt(valor) < 10000)){
        let menu = {};
        menu.nombre = nombre;
        menu.horario = horario;
        menu.valor = valor;
        menu.descripcion = descripcion;
        console.log(menu);
        ordenes.push(menu); 
        cargarTabla();
        Swal.fire("Exito!","Registro de Menu realizado","success");
        
    }else if((horario == "almuerzo") && (parseInt(valor) > 10000 && parseInt(valor) < 20000)){
        let menu = {};
        menu.nombre = nombre;
        menu.horario = horario;
        menu.valor = valor;
        menu.descripcion = descripcion;
        console.log(menu);
        ordenes.push(menu); 
        cargarTabla();
        Swal.fire("Exito!","Registro de Menu realizado","success");
    }else if((horario == "once") && (parseInt(valor) > 5000 && parseInt(valor) < 15000)){
        let menu = {};
        menu.nombre = nombre;
        menu.horario = horario;
        menu.valor = valor;
        menu.descripcion = descripcion;
        console.log(menu);
        ordenes.push(menu); 
        cargarTabla();
        Swal.fire("Exito!","Registro de Menu realizado","success");
    }else if((horario == "cena") && (parseInt(valor) > 15000)){
        let menu = {};
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
    
    
    
});