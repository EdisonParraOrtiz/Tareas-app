import './App.css';
import ListaTareas from './componentes/ListaTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <Tarea  texto = 'Aprender React'/> */}
        {/* <TareaFormulario /> */}
        <ListaTareas />

      </div>
    </div>
  );
}

export default App;
