import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const useHandleRegister = () => {
    //leer estado del input
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Password2, setPassword2] = useState('');

    
    //los datos que entran del input
    const handleInputChange = (e) =>{

        const value = e.target.value;
        const input = e.target.name;

        if (input === "email") setEmail(value)
        if (input === "password") setPassword(value)
        if (input === "Confirm_password") setPassword2(value)
        
    }

   
    //evaluar email con expresión regular (regex)
    const validateEmail = () =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(Email);
    }

    //criterio de evaluación para password
    const validatePassword =() =>{

        if(Password !== Password2){
            return <span>The password does not match</span>
        }

        if (Password.length === 0) {
            return <span>The password must not be empty</span>

        }
     
        if(Password.length < 8){
            return <span>The password must be greater than 8 characters</span>
        } 

        if(Password.length > 15){
            return <span>The password must not exceed 15 characters</span>
        } 
        
        return true;
    }


    const validarDatos = () =>{

        if(validateEmail() && validatePassword()===true){
            toast('Acoount created successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:'success'
            });
          
        }
        
        if(validateEmail() === false){
            toast('Invalid Email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:'warning'
            });
        }

    }
   
    return{
        handleInputChange,
        validarDatos,
        validatePassword
    }
}
