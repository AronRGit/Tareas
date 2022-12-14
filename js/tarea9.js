class Empleado {
     nombre= ""; 
     apellido= "";
     codigo = "";
      correo = "";
       cargo = "";

    sueldoBruto= function() {
        let sueldo = 0;

        switch (this.cargo) {
          case 'jefe':
            sueldo = 5000;
            break;
          case 'analista':
            sueldo = 4000;
            break;
          case 'programador':
            sueldo = 3000;
            break;
          case 'soporte':
            sueldo = 2000;
            break;
          case 'asistente':
            sueldo = 1500;
            break;    
          default:
            sueldo = 0;
        }
    
        return sueldo;
    }
  
    descuento= function() {
        const sueldoBruto = this.sueldoBruto();
        return sueldoBruto * 0.125;
    }
  
    sueldoNeto=function() {
        let sueldoneto=0;
      return sueldoneto= this.sueldoBruto() - this.descuento();
    }
  }
  let empleados = [];
  const btnenviar = document.getElementById("btnenviar");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const codigo = document.getElementById("codigo");
  const correo = document.getElementById("correo");
  const cargo = document.getElementById("cargo");
  const lista = document.getElementById("lista");
  const mensajes = document.getElementById("mensajes");

  btnenviar.onclick = function(){
   
    const empleadoNuevo = new Empleado();
    empleadoNuevo.nombre= nombre.value;
    empleadoNuevo.apellido = apellido.value;
    empleadoNuevo.codigo = codigo.value;
    empleadoNuevo.correo = correo.value;
    empleadoNuevo.cargo = cargo.value;

    //Limpiar los inputs y el codigo aumenta
    nombre.value= '';
    apellido.value= '';
    codigo.value++;
    correo.value = '@empresa.com';
    cargo.value = '';

    empleados.push(empleadoNuevo);
    for (const empleado of empleados) {
      lista.innerText += `${empleado.nombre} ${empleado.apellido} codigo: ${empleado.codigo}`;
    }
    mensajes.innerText += `${empleadoNuevo.nombre} de cargo ${empleadoNuevo.cargo} tiene como sueldo bruto S/${empleadoNuevo.sueldoBruto()}, el descuento es de S/${empleadoNuevo.descuento()} y el sueldo neto es  S/${empleadoNuevo.sueldoNeto()}\n`
    
  }
