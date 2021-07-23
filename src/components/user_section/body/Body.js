import React from 'react'
import { fire } from '../../../../db/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { useEffect } from 'react'
const img1 = 'https://www.ciudaddemascotas.com/pub/media/catalog/product/cache/69c62af52119a2e09af1a901268e75f5/t/o/total_max_performance_ligth-min_2.png'

export const Body = () => {
    const auth = fire.auth();
    const fs = fire.firestore();

    const setuPosts = (data) => {
        const Thetag = document.querySelector('.row')
        let html = '';
        data.forEach((doc) => {
            const post = doc.data();
            const{title,descripcion,precioVenta} = post
            const showTag = `<div class="card" style="width: 18rem;">
            <img src="${img1}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h4 class="card-title">${precioVenta}</h4>
              <p class="card-text">${descripcion}<p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>`
          html += showTag;

          Thetag.innerHTML = html;

        })  
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

    // useEffect(() => {
        // userState();
    // },[]);
    
    return (
        <div className="containerBody"> 
            <div className="row" >
            {userState()}
                
            </div>
        </div>
    )
}
