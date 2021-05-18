import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

const NavbarDashboard = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const urlFull = history.location.pathname;

  return(
    <div className="con-nav-dashboard">
      <h4 onClick={()=>{history.replace(`${url}`)}}>
        Admin<br/>Dashboard
      </h4>
      <br/><br/><br/><br/><br/><br/>
      <Link 
        className={urlFull === '/dashboard/product' ? "dashboard-item active" : "dashboard-item"}
        to={`${url}/product`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-shopping-cart"/>
              </td>
              <td>
                <h6>Product</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <Link
        className={urlFull === '/dashboard/user' ? "dashboard-item active" : "dashboard-item"}
        to={`${url}/user`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-user"/>
              </td>
              <td>
                <h6>User</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <Link
        className={(urlFull === '/dashboard/store' || urlFull === '/dashboard/store-request') ? 
        "dashboard-item active" : "dashboard-item"}
        to={`${url}/store`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-store"/>
              </td>
              <td>
                <h6>Store</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <Link
        className={urlFull === '/dashboard/payment' ? "dashboard-item active" : "dashboard-item"}
        to={`${url}/payment`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-credit-card"/>
              </td>
              <td>
                <h6>Payment</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <Link
        className={urlFull === '/dashboard/shipment' ? "dashboard-item active" : "dashboard-item"}
        to={`${url}/shipment`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-shipping-fast"/>
              </td>
              <td>
                <h6>Shipment</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <Link
        className={urlFull === '/dashboard/history' ? "dashboard-item active" : "dashboard-item"}
        to={`${url}/history`}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-clipboard-list"/>
              </td>
              <td>
                <h6>History</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  )
}


export default NavbarDashboard;