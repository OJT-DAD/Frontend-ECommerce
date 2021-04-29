import { useHistory } from 'react-router-dom';

const Login = ({ handleAuth }) => {
  
  const history = useHistory();
  const home = () => {
    history.replace('/home');
  };

  return (
    <div>
      <form>
        <h3 className="auth-title">Login</h3>
        <div className="form mt-2">
          <input type="text" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">Username</span>
          </label>
        </div>
        <div className="form mt-2">
          <input type="password" autoComplete="off" required/>
          <label className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <button type="button" onClick={home} className="btn-auth">Login</button>
      </form>
      <p className="auth-state">not have an account? <span onClick={handleAuth}>register</span></p>
    </div>
  )
}

export default Login;
