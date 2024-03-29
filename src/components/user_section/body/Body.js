import React, { useState } from 'react'
import { fire } from '../../../../db/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
const img1 = 'https://www.ciudaddemascotas.com/pub/media/catalog/product/cache/69c62af52119a2e09af1a901268e75f5/t/o/total_max_performance_ligth-min_2.png'

export const Body = () => {
    const auth = fire.auth();
    const fs = fire.firestore();
    const id = fs.collection('users').doc('items').id

    const [links, setLinks] = useState([])
    
    const setuPosts = (data) => {
        const Thetag = document.querySelector('.row')
        let html = '';
        let productos = [];
        const buy = []
       

        data.forEach((doc,i) => {
            const post = doc.data();
            const{title,descripcion,precioVenta} = post
            productos.push(title)
            const showTag = `<div class="card" style="width: 18rem;">
            <img src="${img1}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h4 class="card-title">${precioVenta}</h4>
              <p class="card-text">${descripcion}<p>
              <a class="btn btn-primary" id="zonas" name="buttonF" key="${i}" onclick="myFunction(${i})">Buy</a>
            </div>
          </div>`
          html += showTag;

          Thetag.innerHTML = html;
        }) 

        console.log('entrando')

        window.myFunction = async(e) => {
     
            const producSelected = productos[e]
            const btn = document.querySelectorAll('#zonas');
            console.log(producSelected)
            if (producSelected) {


                const  length = btn.length;
                
                btn.forEach((e)=>{
                    // e.style.backgroundColor='gray';
                    e.style.backgroundColor='gray'
                })
                
                               
                await toast(`agregado al carrito el elemento: ${producSelected}!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    type:'success'
                }); 

                

              
                await setTimeout(() => {
                    btn.forEach((e)=>{
                        // e.style.backgroundColor='gray';
                        e.style.backgroundColor=''
                    })
                }, 3000);
                
                fs.collection('users').doc().set({
                    items:producSelected
                }) //guardar en firestore
                
            }

            
           
           
        
        };
        
    }

  
    


    const userState = () =>{
        auth.onAuthStateChanged(user =>{
            if (user) {
                fs.collection('posts')
                    .get()
                    .then((snapshot) => {

                        setuPosts(snapshot.docs)
                        
                    });
            }else{
                console.log('auth: sign out')
            }
        });

       
    }

    
  
    return (
        <div className="containerBody"> 
        <ToastContainer />

            <div className="row" >
            {
                useEffect(() => {
                    userState()
                }, [])
             
             
            }

                
            </div>
        </div>
    )
}
