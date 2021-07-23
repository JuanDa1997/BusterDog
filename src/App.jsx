import { SignInSide } from "./components/SignInSide";
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import { Register } from './components/Register';
import { InitSection } from './components/user_section/InitSection';
import { useEffect, useState } from "react";
import { fire } from '../db/firebase';
import 'firebase/auth';

const App = () => {
  const [user, setUser] = useState('');

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[]);


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
            {user ? (

              <InitSection />

            ):(
              <SignInSide />
            )}
          </Route>        
        </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
