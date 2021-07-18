import React from 'react';
import { useStyles } from '../../css/register-styles';
import '../../scss/Register.css'
import { ToastContainer} from 'react-toastify';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHandleRegister } from '../hooks/useHandleRegister';


export const Register = () => {

  const classes = useStyles();
  
  const {handleInputChange, validatePassword, validarDatos} = useHandleRegister();

  //para trabajar con los cambios de la contraseña
  //se maneja el evento del boton en el componente padre
  //de esta manera se tiene control entre ambas configuraciones(useHandleRegister.js)
  const handleInputSubmit = () =>{
    validarDatos();
    document.getElementById('warning').style.display="";
    document.getElementById('warning').style.color="Red";

  }
 
  return (
    <div className="body_register">  
      <ToastContainer/> 
      <div className="containerRegister">
        <div className="container_img">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> 
        </div>
        <form className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Confirm_password"
            label="Confirm Password"
            type="password"
            id="Confirm_password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <span id="warning" style={{display:"none"}} >{validatePassword()}</span>

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleInputSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}