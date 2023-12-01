$().ready(() => {
    //detecta carga de la pagina
    todos_controlador();
  });

var todos_controlador = () => {
var todos = new Telefonos_model("","", "", "", "", "","todos");
todos.todos();
}