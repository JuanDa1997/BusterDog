import {fire} from '../../../../db/firebase'
import 'firebase/firestore'
import { useState } from 'react';
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

        if (Value === 'salesPrice') {
            setprecioVenta(inputValue)
        }

        if (Value === 'description') {
            setDescripcion(inputValue)
        }
    }

    const submit = () =>{
        // console.log(Nombre, Costo, precioVenta, Descripcion)
        
    }

    return (
        <div className="containerForm">
            <h4>Here you can sell what you don't use!</h4>
            <div className="line"></div>
            <div className="container">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01" />
                </div>

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

                <div className="d-grid gap-2 col-6 mx-auto" style={{marginTop:'40px'}}>
                    <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
                </div>
            </div>

        </div>
    )
}
