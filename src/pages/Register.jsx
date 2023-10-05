
import { useState } from "react";
import registerUtil from "../utils/registerUtil";
import { Link } from "react-router-dom";

const Register = () => {

  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleSubmitRegiter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const response = await registerUtil(form);
    if(response.status == 201) {
      setIsRegistered(true);
    }
 }

  return(
    <div className="form__register">
      { !isRegistered && 
        <form method="post" onSubmit={handleSubmitRegiter}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Camil@ Rodriguez" required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="cami34@mail.com" required/>
          <label htmlFor="password">Nombre</label>
          <input type="password" name="password" id="password" placeholder="clave alfanumerica" required/>
          <button type="submit">Register</button>
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
