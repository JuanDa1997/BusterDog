import React from 'react'
import imgDelete from '../../../../assets/delete.png'
import {fire} from '../../../../db/firebase'
import 'firebase/firestore'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
export const ShoppingCart = (props) => {
    const db = fire.firestore();
    const docs = [];
    const id=[]
   let html = '';
//    let html2 = '';
   const {send} = props
//    console.log(send)

    const querys = (e,I) =>{
        let Thetag = document.getElementById('zone')
        // let Thetag2 = document.getElementById('points2')
       

        db.collection('posts').onSnapshot((querySnapShot) =>{
            querySnapShot.forEach((doc) => {
               // console.log(doc.data())
               
               docs.push(doc.data())
               
            });
            // valor.push(docs.find(x => x.title === e))
            const epa = docs.find(x => x.title === e.items)
            const valor = epa.precioVenta
            const name = epa.title
            const costo = epa.costo
            const description = epa.descripcion
            id.push(e.id)
          
            // console.log(valor,name)
            const showTag = ` 

                <tr>
                    <th scopte='row'>1</th>
                    <td id="name">${name}</td> 
                    <td>${valor}</td>
                    <td>${costo}</td>  
                    <td>${description}</td>
                    <td><img id="btn3" src=${imgDelete} alt="delete"  onclick="handleDelete(${I})" /></td>                                      
                </tr>
                            
            `
            
            html += showTag;
            Thetag.innerHTML = html;
            
           
        
        });
    }

    window.handleDelete = async(i) => {
        const key = id[i]

        if (window.confirm('Are you sure want to delete this date?')) {
            await db.collection('users').doc(key).delete();
            toast('Item removed successfuly', {
                type: 'error',
                autoclose:3000,
            })
        }

            
        
    };
   
    

    return (
        <div className="containerShoppingCart" >
            <ToastContainer />
            <div className="showDataBase">
            <table className="table table-dark" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Value</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Description</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody id="zone">
                {
                    
                    useEffect(() => {
                        send.map((e,I)=>{
                            
                            querys(e,I)
   
                       })
                    }, [])
                    
                }

                </tbody>
            </table>
        </div>
        </div>
    )
}


