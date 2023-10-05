
import { useState } from "react";
import { Link } from "react-router-dom";
import registerService from "../services/registerService";
import './Register.scss';

const Register = () => {

  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleSubmitRegiter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const response = await registerService(form);
    if(response.status == 201) {
      setIsRegistered(true);
    }
 }

  return(
    <div className="form__register">
      { !isRegistered && 
        <form method="post" onSubmit={handleSubmitRegiter}>
          <h2>Register</h2>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Camil@ Rodriguez" required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="cami34@mail.com" required/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="clave alfanumerica" minLength='5' required/>
          <button type="submit">Send</button>
        </form>
        ||
        <div className="message__container">
          <h2>Congratulations, you have registered, now you can use favorites!</h2>
          <p>Please, log in your user!</p>
          <Link to={-1}><button>Login</button></Link>
        </div>
      }
    </div>
  )
}

export default Register;
