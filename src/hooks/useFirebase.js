import {useState,useEffect} from 'react';
import { getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut,onAuthStateChanged , updateProfile  } from "firebase/auth";
 import initializeAuthentication from '../Firebase/Firebase.init.js'

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [isLogIn,setIsLogIn]=useState(false);

    const auth=getAuth();
    const googleProvider= new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
       return signInWithPopup(auth,googleProvider);
        
    }
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
           
          });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              
            }
          });
    },[])
    const toggleLogIn=e=>{
      setIsLogIn(e.target.checked);
    }
    
    const handleNameChange=e=>{
      setName(e.target.value)
    }
  
    const handleEmailChange =e=>{
      setEmail(e.target.value)
    }
    const handlePasswordChange =e=>{
      setPassword(e.target.value)
    }
  
    const handleRegistration=e=>{
      e.preventDefault();
      if(password.length<6){
        setError("Password must be at lest 6 characters longs.")
        return;
      }
      if(!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
        setError('password must contain two upper case'); 
        return;
      }
      isLogIn ? processLogin(email,password) : registerNewUser(email,password);
    }
    const processLogin=(email,password)=>{
      signInWithEmailAndPassword(auth,email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        setError('');
      })
      .catch(error=>{
        setError(error.message);
      })
    }
    const registerNewUser=(email,password)=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
        const user =result.user;
        console.log(user);
        setError('');
        setUserName();
      })
      .catch(error=>{
        setError(error.message);
      })
    }
    const setUserName=()=>{
      updateProfile(auth.currentUser , {displayName : name})
      .then(result=>{})
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogIn,
        isLogIn,processLogin
 
    }
      
}

export default useFirebase;