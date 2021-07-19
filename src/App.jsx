import { SignInSide } from "./components/SignInSide";
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import { Register } from './components/Register';

const App = () => {
  return (

    // esta es la manera correcta de renderizar componentes
    //desde las diferentes rutas
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/register" exact>
            <Register value={""}/>
          </Route>

          <Route path="/">
            <SignInSide />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
