import {useState,useEffect} from 'react';
import { getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword,sendEmailVerification ,signOut,onAuthStateChanged,sendPasswordResetEmail, updateProfile  } from "firebase/auth";
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
          setError('');
        })
        .catch(error=>{
          setError('you have input wrong password or email !! please correct it');
        })
      }
    
      const registerNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
          const user =result.user;
          console.log(user);
          setError('');
          verifyEmail();
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
      const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
          console.log(result);
        })
      }
    
      const handleResetPassword=()=>{
        sendPasswordResetEmail(auth,email)
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
        handleResetPassword,
        isLogIn,processLogin
 
    }
      
}

export default useFirebase;