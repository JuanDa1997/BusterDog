import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//importaciones necesarias del firebase
import { fire } from '../../db/firebase';
import 'firebase/auth';

export const useHandleSubmit = () =>{
    
    //leer estado del input
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    

    const showErrrs = () =>{
        return{
            emailError
        }
    }

    const handleInputChange = (e) => {
        
        if (e.target.name !== "email"){

            setPassword(e.target.value)

        }else{

            setEmail(e.target.value)

        }
    }


    const verifyUser = async() =>{
       // validarDatos();
       const auth = fire.auth();

        await auth
            .signInWithEmailAndPassword(Email,Password)
            .then(userCredention =>{
                console.log('Sign in')
            })
            .catch(err =>{
                switch(err.code){
                    case "auth/invalid-email":
                        return  setEmailError(err.message)
                        
                    case "auth/user-disable": 
                        return  setEmailError(err.message)

                    case "auth/user-not-found":
                        return  setEmailError(err.message)

                    case "auth/wrong-password":
                        return  setEmailError(err.message)
                        
                    case "auth/internal-error":
                        return  setEmailError(err.message)

                    case "auth/invalid-password":
                        return  setEmailError(err.message)

                    default: 
                        return setEmailError(err.message)
                }
            });
        
        return true;

   
            
    }
    


    //al boton le llega la info del input
    //y lo manda a la base de datos
   

    return{
        verifyUser,
        handleInputChange,
        showErrrs
    }
}
