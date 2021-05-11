import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useParams } from 'react-router-dom';
import { getUserById, updateUserById } from '../../redux/actions/userManageActionCreator';

const UserEdit = ({ dispatchGetUserByIdAction, dispatchUpdateUserAction }) => {
  const history = useHistory();
  const { addToast } = useToasts();
  
  const [edit, setEdit] = useState({change: false});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const { userId } = useParams();
  const id = parseInt(userId);
  
  const handleEdit = () => {
    setEdit({ ...edit, change: !edit.change })
  }

  useEffect(() => {
    if (id) {
      dispatchGetUserByIdAction(id, ({ firstName, lastName, email, username, password, role }) => 
      {
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setUsername(username);
        setPassword(password);
        setRole(role);
      })
    }
  }, [dispatchGetUserByIdAction, id])
  
  const handleOnSubmit = event => {
    event.preventDefault();
    const data = { id, firstName, lastName, email, username, password, role };
    dispatchUpdateUserAction(id, data, () => {
      addToast('Update User Successfully.', {appearance:'success'});
      handleEdit();
    }, (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };
  
  
// console.log('hehe', firstName)
  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>User Detail</h4>
      </header>
      <div className="con-right p-4">

        <form onSubmit={handleOnSubmit}>
          <div className="d-flex mb-3">
            <label>First Name</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
            />)}
          </div>
          <div className="d-flex mb-3">
            <label>Last Name</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Last Name"
              value={lastName}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
            />)}
          </div>
          <div className="d-flex mb-3">
            <label>Email</label>
            {!edit.change ?
            (<input
              required
              type="email"
              placeholder="Email"
              value={email}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />)}
          </div>
          <div className="d-flex mb-3">
            <label>Role</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Role"
              value={role}
              disabled
              className="form-control"
            />):
            (<select 
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              className="form-select"
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Seller">Seller</option>
              <option value="Admin">Admin</option>
            </select>)}
          </div>
          <div className="d-flex mb-3">
            <label>Username</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Username"
              value={username}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />)}
          </div>
          <div className="d-flex mb-3">
            <label>Password</label>
            {!edit.change ?
            (<input
              type="text"
              placeholder="Password"
              value={password}
              disabled
              className="form-control"
            />):
            (<input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />)}
          </div>
          {edit.change && 
          (<div className="d-flex">
            <button className="back px-2 ml-auto" type="button" onClick={handleEdit}>Cancel</button>
            <button className="add px-2 ml-2" type="submit">Save</button>
          </div>)}
        </form>
        <div className="d-flex">
          {!edit.change &&
          (<button className="edit px-2 ml-auto" onClick={handleEdit}>Edit</button>)}
        </div>
      </div>
    </div>
  ) 
}

const mapDispatchToProps = dispatch => ({
  dispatchGetUserByIdAction: (id, onSuccess) => 
    dispatch(getUserById(id, onSuccess)),
  dispatchUpdateUserAction: (id, data, onSuccess, onError) => 
    dispatch(updateUserById(id, data, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(UserEdit);