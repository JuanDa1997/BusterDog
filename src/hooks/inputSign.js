import { useState } from 'react'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importaciones necesarias del firebase
import 'firebase/auth';

export const useHandleSubmit = () =>{
    
    //leer estado del input
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')


    const handleInputChange = (e) => {
        
        if (e.target.name !== "email"){

            setPassword(e.target.value)

        }else{

            setEmail(e.target.value)

        }
    }

    //evaluar email con expresión regular (regex)
    const validateEmail = () =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(Email);
    }

    const validatePassword = () =>{

        if (Password.length === 0) {
            return console.log('The password must not be empty')

        }
     
        if(Password.length < 8){
            return console.log('The password must be greater than 8 characters')
        } 

        if(Password.length > 15){
            return console.log('The password must not exceed 15 characters')
        } 

        
        
    }

    const validarDatos = () =>{

        
        if(validateEmail()){
            console.log('entro')
          
        }else{
            return toast('Invalid Email!', {
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


    //al boton le llega la info del input
    //y lo manda a la base de datos
    const handleSubmit = () =>{

        // validarDatos();
        validatePassword();


        // const auth = fire.auth();

        // auth
        //     .createUserWithEmailAndPassword(Email,Password)
        //     .then(userCredention =>{
        //         console.log('Sing Up')
        //     });
         
    }

    return{
        handleSubmit,
        handleInputChange
    }
}
