import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user,setUser]= useState({});
    const [isLoading,setIsLoading]= useState(true);
    const [error,setError]=useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    // login,register using google account 
    const signInUsingGoogle = (history,redirect_uri) => {
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            setUser(result.user);
        })
        .finally(()=>{
            history.push(redirect_uri);
            setIsLoading(false)}
        )
    }

    const signInUsingFacebook = (history,redirect_uri) => {
        setIsLoading(true)
        signInWithPopup(auth,facebookProvider)
        .then(result=> {
            setUser(result.user);
        })
        .finally(()=>{
            history.push(redirect_uri);
            setIsLoading(false)}
        )
    }
    // sign in using email and password,then redirect to target url 
    const signInUsingEmailPassword= (email,password,history,redirect_uri)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            history.push(redirect_uri);
        })
        .catch(err=>{
            setError(err.message);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }


    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false))
    }
    // update User info after registration complete 
    const updateUser=(name,history,redirect_uri)=>{
        setIsLoading(true)
        updateProfile(auth.currentUser,{displayName:name})
        .then(res=>{
            setIsLoading(false);
            history.push(redirect_uri);
        })
    }
    // crete a user using email and password 
    const createUser=(email,password,name,history,redirect_uri)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            updateUser(name,history,redirect_uri);
        })
        .catch((err=>{
            setError(err.message)
        }))

    }
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        createUser,
        signInUsingEmailPassword,
        signInUsingFacebook
    }
}
export default useFirebase;