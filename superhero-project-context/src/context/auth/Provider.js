import { AuthContext } from ".";
import { useCallback } from "react";

export default function AuthProvider({children}) {
  const handleLogin = useCallback( async (name, email) => { 
    localStorage.setItem("@superhero-isAuth", "true");
    localStorage.setItem("@superhero-data", JSON.stringify({
      name,
      email
    }));
  }, []);
  return(
    /** Exportamos el componente importando el createContext desde el archivo index.js lo que nos permite usar el método provider (que lo convierte en proveedor), a traves del vañue se envía la información a los consumers  */
    <AuthContext.Provider value={{
      isAuthenticated: localStorage.getItem("@superhero-isAuth")?.length > 0,
      onLogin: handleLogin,
    }}>
      {children}
    </AuthContext.Provider>
  )
}