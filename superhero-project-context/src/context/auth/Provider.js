import { AuthContext } from "."

export default function AuthProvider({children}) {
  return(
    /** Exportamos el componente importando el createContext desde el archivo index.js lo que nos permite usar el método provider (que lo convierte en proveedor), a traves del vañue se envía la información a los consumers  */
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}