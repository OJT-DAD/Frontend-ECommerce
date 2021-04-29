import { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../styles/auth.css';

const AuthPage = () => {

  const [auth, setAuth] = useState({ login: true });
  
  const handleAuth = () => {
    setAuth({ ...auth, login: !auth.login })
  };

  return(
    <div className="container con-auth my-5 rounded">
      <div className="left">
        <h3 className="auth-title">AUTH PAGE</h3>
      </div>

      {auth.login ? 
        (<Login handleAuth={handleAuth}/>) : (<Register handleAuth={handleAuth}/>)
      }
    </div>
  )
}

export default AuthPage;
