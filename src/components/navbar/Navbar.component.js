import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActionCreator';
import './navbar.css';

const Navbar = ({ auth, dispatchLogoutAction }) => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container-fluid mx-5">
        <h1 className="navbar-title my-auto" onClick={() => history.replace("/home")}>E-Commerce</h1>
        <div className="ml-auto d-flex navright">
          <Link to="/cart" className="d-flex">
            <i className="fas fa-shopping-cart"/>
          </Link>
          {auth.isLoggedIn &&
          (<div className="d-flex">
            <div className="profile">{auth.fullName.slice(0,1).toUpperCase()}</div>
            <div className="dropdown my-auto">
              <p className="user dropdown-toggle" role="button" data-bs-toggle="dropdown">
                {auth.fullName}
              </p>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={`/personal/${auth.userId}`}>{auth.fullName}</a></li>
                {(auth.role === 'Seller' || auth.role === "Admin") && 
                (<li><a className="dropdown-item" href="/store/1">Store</a></li>)}
                {auth.role === "Admin" &&
                (<li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>)}
                <li><a className="dropdown-item logout" href="/" onClick={dispatchLogoutAction}>Logout</a></li>
              </ul>
            </div>
          </div>)
          }
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
