import {fire} from '../../../../db/firebase'
import 'firebase/firestore'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const Form = () => {
    const db = fire.firestore();
    const [Nombre, setNombre] = useState('');
    const [Costo, setCosto] = useState('');
    const [precioVenta, setprecioVenta] = useState('');
    const [Descripcion, setDescripcion] = useState('');

   

    const addUser = (e) =>{
        e.preventDefault()
        const Value = e.target.name;
        const inputValue = e.target.value;

        if (Value === 'title') {            
            setNombre(inputValue)
        }

        if (Value === 'cost') {
            setCosto(inputValue)
        }

        if (Value === 'salePrice') {
            setprecioVenta(inputValue)
        }

        if (Value === 'description') {
            setDescripcion(inputValue)
        }

    }

    const validateInfo = () =>{
       
        const num = isNaN(Costo) //false si es numero
        const num2 = isNaN(precioVenta)
        
        if (Nombre.length === 0) {
            return <span>nombre no puede estar vacío</span> 
        }

        if (Costo.length === 0) {
            
            return <span>costo no puede estar vacío</span> 
        }

        if (num === true) {
            return <span>costo debe ser numérico</span> 
        }

        if (precioVenta.length === 0) {
            return <span>precio no puede estar vacío</span> 
        }

        if (num2 === true) {
            return <span>precio debe ser numérico</span> 
        }

        if (Descripcion.length === 0) {
            return <span>descripcion no puede estar vacío</span> 
        }

        return true
    }
    

    const submit = async() =>{

        document.getElementById('errorMsg').style.display="block";

        if(validateInfo() === true) {

            const posts ={
                title:Nombre,
                costo:Costo,
                descripcion:Descripcion,
                precioVenta
                
            }

            await db.collection('posts')
                    .add(posts)

            toast('Item submited with successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type:'success'
            }); 
        }
    }

    return (
        
        <div className="containerForm">
            <ToastContainer /> 
            <h4>Here you can sell what you don't use!</h4>
            <div className="line"></div>
            <div className="container">
                

                <div className="input-group mb-3">
                    <input type="text" name="title" onChange={addUser} className="form-control name" placeholder="Article name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">Article or title</span>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">$ cost</span>
                    <input type="text" name="cost" onChange={addUser} className="form-control cost" aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">$ sale price</span>
                    <input type="text" name="salePrice" onChange={addUser} className="form-control salesValue" aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
                </div>

                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea className="form-control description" name="description" aria-label="With textarea" onChange={addUser}></textarea>
                </div>
                <span  id="errorMsg" style={{color:'red', display:'none'}}>{validateInfo()}</span>

                <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:'40px'}}>
                    <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
                </div>
            </div>

        </div>
    )
}
