import { Header } from './header/Header'
import '../../../scss/InitSection.css';
import { Body } from './body/Body';
import { Form } from './formToSell/Form';

import{
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import {fire} from '../../../db/firebase'
import 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { ShoppingCart } from './formToSell/ShoppingCart';
import { Cargando } from './Cargando';

export const InitSection = () => {
    const [links, setLinks] = useState()
    const db = fire.firestore();
    const docs = [];

    const getLinks = async() => {
        await db.collection('users').onSnapshot((querySnapShot) =>{
          querySnapShot.forEach((doc) => {
            // console.log(doc.data())
            docs.push({...doc.data(),id:doc.id});
        });
          setLinks(docs)

        }); 
        
    };  



    
    useEffect(() =>{
        getLinks()
        
    },[]);

   
    
    return (
        <div className="body">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Header/>
                        <Body /> 
                    </Route>

                    <Route path="/sell">
                        <Header/>
                        <Form />
                    </Route>

                    <Route path="/shopping_cart">
                        <Header/>

                        {links ?(
                            <ShoppingCart send={links}  />

                        ):(
                            <Cargando />
                        )}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
      
    )
}
