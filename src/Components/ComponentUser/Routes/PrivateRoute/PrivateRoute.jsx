import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = () => {

    const user = JSON.parse(localStorage.getItem("userData")) || null

    if (!user) {
        // Si l'utilisateur n'est pas connecté, redirigez-le vers la page d'identification
        return <Navigate to="/idParCall" />;
    }
    
    const role = user.user.role; // Assurez-vous d'obtenir le rôle correctement depuis vos données utilisateur
    
    if (role === 'user') {
        // Si l'utilisateur a le rôle 'user', affichez les enfants (le contenu protégé)
        return <Outlet />;
    } else {
        // Si l'utilisateur a un rôle différent, redirigez-le vers une autre page (par exemple, un message d'erreur ou la page d'accueil)
        return <Navigate to="/idParCall" />;
    }
  
}

export default PrivateRoute