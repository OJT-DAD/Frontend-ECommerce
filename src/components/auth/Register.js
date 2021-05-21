import { useState } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { registerUser } from '../../redux/actions/authActionCreator';

const Register = ({ handleAuth, dispatchRegisterAction }) => {
  const { addToast } = useToasts();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(firstName, lastName, email, username, password, () => {
      handleAuth();
      addToast('Create Account Successfully', { appearance: 'success' });
    },(response) => addToast(`Error: ${response}`, { appearance: 'error' }));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3 className="auth-title">Register</h3>
        <div className="form mt-2">
          <input required
            autoComplete="off" 
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="label-name">
            <span className="content-name">First Name</span>
          </label>
        </div>
        <div className="form mt-2">
          <input required
            autoComplete="off" 
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="label-name">
            <span className="content-name">Last Name</span>
          </label>
        </div>
        <div className="form mt-2">
          <input required
            autoComplete="off"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
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
        <button type="submit" className="btn-auth">Register</button>
      </form>
      <p className="auth-state">have an account? <span onClick={handleAuth}>login</span></p>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  dispatchRegisterAction: (firstName, lastName, email, username, password, onSuccess, onError) => 
    dispatch(registerUser({ firstName, lastName, email, username, password }, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(Register);
