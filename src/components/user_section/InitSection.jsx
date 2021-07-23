import { Header } from './header/Header'
import '../../../scss/InitSection.css';
import { Body } from './body/Body';
import { Form } from './formToSell/Form';
import{
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import { ShoppingCart } from './formToSell/ShoppingCart';

export const InitSection = () => {
   
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
                        <ShoppingCart />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
      
    )
}
