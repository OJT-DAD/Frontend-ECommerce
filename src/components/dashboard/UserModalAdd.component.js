import { useState } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { registerUser } from '../../redux/actions/authActionCreator';

const UserModalAdd = ({ dispatchRegisterAction }) => {
  const { addToast } = useToasts();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(firstName, lastName, email, username, password, () => {
      window.$('#modalAddUser').modal('hide');
      addToast('Create User Successfully.', {appearance:'success'});
      window.location.reload();
    }, (message) => {
      window.$('#modalAddUser').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  return (
    <div className="modal fade" id="modalAddUser" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4">
            <form onSubmit={handleOnSubmit}>
              <div className="d-flex mb-3">
                <label>First Name</label>
                <input
                  required
                  type="text" 
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Last Name</label>
                <input
                  required
                  type="text" 
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Email</label>
                <input
                  required
                  type="text" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Username</label>
                <input
                  required
                  type="text" 
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Password</label>
                <input
                  required
                  type="text" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="float-end mt-3">
                <button className="cancle px-2 mr-2" data-bs-dismiss="modal">Cancle</button>
                <button type="submit" className="add px-2">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchRegisterAction: (firstName, lastName, email, username, password, onSuccess, onError) => 
    dispatch(registerUser({firstName, lastName, email, username, password}, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(UserModalAdd);
