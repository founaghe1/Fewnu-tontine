// AuthContext.js
import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    // Utilisez Axios pour envoyer la requête à votre API
    return axios
      .post("https://fewnu-tontin.onrender.com/auth/login", userData)
      .then((response) => {
        // Si la connexion réussit, mettez à jour l'état de l'utilisateur
        dispatch({ type: "LOGIN", payload: response.data });
        return response.data; // Vous pouvez renvoyer des données supplémentaires si nécessaire
      })
      .catch((error) => {
        // Gérez les erreurs de connexion ici
        throw error; // Renvoyez l'erreur pour qu'elle puisse être gérée par le composant de connexion
      });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
