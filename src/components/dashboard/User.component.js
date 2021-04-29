import { Link, useHistory } from 'react-router-dom';

const User = () => {
  const history = useHistory();
  const handleBack = () => {
    history.replace("/dashboard")
  };

  return(
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>User Management</h4>
        <button className="add my-auto px-2 py-1">
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
            {Data.map((user) => (
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
                <button>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User;

const Data = [
  {
    'id': 1,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 2,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 3,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 4,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 5,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 6,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 7,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 8,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 9,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 10,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 11,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 12,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 13,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 14,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
  {
    'id': 15,
    'firstName': 'firstName',
    'lastName': 'LastName',
    'username': 'username',
    'role': 'User'
  },
]