import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null) 
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        register,
        login,
        logout,
        googleLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;