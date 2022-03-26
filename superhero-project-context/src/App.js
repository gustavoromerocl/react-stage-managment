import './App.css';
import Routes from './routes';
import AuthProvider from './context/auth/Provider';

function App() {
  return( 
    /* Impotamos el context api creado y lo heredamos a los childrens de este para ser consumido */
    <AuthProvider>
      <Routes />
    </AuthProvider>
    
  );
}

export default App;
