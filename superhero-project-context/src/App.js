import './App.css';
import Routes from './routes';
import AuthProvider from './context/auth/Provider';
import SuperheroProvider from './context/superhero/Provider';

function App() {
  return( 
    /* Impotamos el context api creado y lo heredamos a los childrens de este para ser consumido */
    <AuthProvider>
      <SuperheroProvider>
        <Routes />
      </SuperheroProvider> 
    </AuthProvider>
    
  );
}

export default App;
