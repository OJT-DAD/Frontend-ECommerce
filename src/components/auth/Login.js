import { useState } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { loginUser } from '../../redux/actions/authActionCreator';

const Login = ({ handleAuth, dispatchLoginAction }) => {
  const { addToast } = useToasts();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchLoginAction(username, password,
      () => addToast('Logged In Successfully', { appearance: 'success' }),
      (response) => addToast(`Error: ${response}`, { appearance: 'error' }));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3 className="auth-title">Login</h3>
        <div className="form mt-2">
          <input required
            autoComplete="off" 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="label-name">
            <span className="content-name">Username</span>
          </label>
        </div>
        <div className="form mt-2">
          <input required
            autoComplete="off" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <button type="submit" className="btn-auth">Login</button>
      </form>
      <p className="auth-state">not have an account? <span onClick={handleAuth}>register</span></p>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (username, password, onSuccess, onError) => 
    dispatch(loginUser({ username, password }, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(Login);
