// Importamos los componentes
import ListPersonajes from "./Components/Personajes/ListPersonajes";


function App() {

  return (
    <div className='bg-gray-500 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      
      <ListPersonajes />
      
      
    </div>
  );
}

export default App;
