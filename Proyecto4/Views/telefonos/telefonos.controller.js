function init() {
  $("#form_telefonos").on("submit", function (e) {
    guardaryeditar(e);
  });
}

$().ready(() => {
    //detecta carga de la pagina
    todos_controlador();
  });

var todos_controlador = () => {
var todos = new Telefonos_model("","", "", "", "", "","todos");
todos.todos();
}

var guardaryeditar = (e)=>{
  e.preventDefault();
  var formData = new FormData($("#form_telefonos")[0]);
  var usuarios = new Telefonos_model(formData,'','','','','','insertar');
  usuarios.insertar();
}
;init();
