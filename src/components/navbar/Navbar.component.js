import { Link, useHistory } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const user = {
    'username': 'Username'
  }
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container-fluid mx-5">
        <h1 className="navbar-title my-auto" onClick={() => history.replace("/home")}>E-Commerce</h1>
        <div className="ml-auto d-flex navright">
          <Link to="/cart" className="d-flex">
            <i className="fas fa-shopping-cart"/>
          </Link>
          <div className="d-flex">
            <div className="profile">{user.username.slice(0,1)}</div>
            <p className="user">{user.username}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
