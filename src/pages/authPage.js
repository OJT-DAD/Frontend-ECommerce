import { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../styles/auth.css';
import login1 from '../images/login1.png';
import login2 from '../images/login2.png';

const AuthPage = () => {

  const [auth, setAuth] = useState({ login: true });
  
  const handleAuth = () => {
    setAuth({ ...auth, login: !auth.login })
  };

  return(
    <div className="container con-auth my-5 rounded">
      <div className="left">
        <img src={login2} className="login2" alt="login2"/>
        <img src={login1} className="login1" alt="login1"/>
      </div>

      {auth.login ? 
        (<Login handleAuth={handleAuth}/>) : (<Register handleAuth={handleAuth}/>)
      }
    </div>
  )
}

export default AuthPage;
