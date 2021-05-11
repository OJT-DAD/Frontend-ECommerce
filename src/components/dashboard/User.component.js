import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { fetchAllUser, deleteUser } from '../../redux/actions/userManageActionCreator';
import UserModalAdd from '../dashboard/UserModalAdd.component';
import UserModalDelete from '../dashboard/UserModalDelete.component';

const User = ({ users, dispatchGetAllUserAction, dispatchDeleteUserAction }) => {
  const history = useHistory();
  const { addToast } = useToasts();

  const [selected, setSelected] = useState('');

  useEffect(() => dispatchGetAllUserAction(), [dispatchGetAllUserAction])

  const showDeleteModal = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteUser').modal('show');
  };
  
  const handleOnDelete = () => {
    dispatchDeleteUserAction(selected, () => {
      window.$('#modalDeleteUser').modal('hide');
      addToast('Delete User Successfully.', {appearance:'warning'});
    }, (message) => {
      window.$('#modalDeleteUser').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };
  
  const handleBack = () => {
    history.replace("/dashboard")
  };
  

  return(
    <>
      <div className="con-dashboard-right">
        <header className="px-3">
          <button className="back my-auto px-2 py-1" onClick={handleBack}>
            <i className="fas fa-arrow-left mr-2"/>
            Back
          </button>
          <h4>User Management</h4>
          <button className="add my-auto px-2 py-1" data-bs-toggle="modal" data-bs-target="#modalAddUser">
            <i className="fas fa-plus mr-2"/>
            User
          </button>
        </header>
        <div className="con-right">
          <table className="user mb-5">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Role</th>
                <th className="detail">Detail</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/dashboard/user/${user.id}`} className="Link">
                    Detail
                  </Link>
                </td>
                <td>
                  <button onClick={(e) => showDeleteModal(e, user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserModalAdd/>
      <UserModalDelete handleOnDelete={handleOnDelete} />
    </>
  )
}

const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = dispatch => ({
  dispatchGetAllUserAction: () => dispatch(fetchAllUser()),
  dispatchDeleteUserAction: (id, onSuccess, onError) => 
    dispatch(deleteUser(id, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(User);

// const Data = [
//   {
//     'id': 1,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 2,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 3,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 4,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 5,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 6,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 7,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 8,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 9,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 10,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 11,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 12,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 13,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 14,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
//   {
//     'id': 15,
//     'firstName': 'firstName',
//     'lastName': 'LastName',
//     'username': 'username',
//     'role': 'User'
//   },
// ]