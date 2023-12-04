class Telefonos_model{
    constructor(
        id_telefono,
        marca,
        modelo,
        ram,
        almacenamiento,
        costo,
        data,
        Ruta
    ){
        this.id_telefono = id_telefono;
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.costo = costo;
        this.data  =data;
        this.Ruta = Ruta;

    }
    todos(){
        var html = "";
        $.get("../../Controllers/telefonos.controller.php?op=" + this.Ruta, (res) => {
            res = JSON.parse(res);
            $.each(res, (index, valor) => {
               
                
                html += `<tr>
                            <td>${index + 1}</td>
                            <td>${valor.marca}</td>
                            <td>${valor.modelo}</td>
                            <td>${valor.ram}</td>
                            <td>${valor.almacenamiento}</td>
                            <td>${valor.costo}</td>
                            <td><button class="btn btn-danger" onclick="eliminar('${valor.id_telefono}')">Eliminar</button></td>
                        </tr>`;
            });
            $("#tabla_telefonos").html(html);
        });
        return html;
    
    }
    insertar() {
        var dato = new FormData();
        dato = this.data;
        $.ajax({
          url: "../../Controllers/telefonos.controller.php?op=insertar",
          type: "POST",
          data: dato,
          contentType: false,
          processData: false,
          success: function (res) {
            res = JSON.parse(res);
            if (res === "ok") {
              Swal.fire("telefonos", "telefonos Registrado", "success");
              todos_controlador();
            } else {
              Swal.fire("Error", res, "error");
            }
          }
         
        });
        this.limpia_Cajas();  
        
      }
      limpia_Cajas(){
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("ram").value = "";
        document.getElementById("almacenamiento").value = "";
        document.getElementById("costo").value = "";

        
        $("#Modal_telefonos").modal("hide");
      }
    
}