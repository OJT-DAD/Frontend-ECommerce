// import { useState } from 'react';
import { useHistory, Link, useRouteMatch } from 'react-router-dom';

const StoreRequest = () => {

  const history = useHistory();
  const { path } = useRouteMatch();

  const handleBack = () => {
    history.replace("/dashboard")
  };


  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Request Store</h4>
        <div className="dropdown my-auto">
          <button className="btn-manage-store dropdown-toggle px-2 py-1" type="button" id="dropdown1" data-bs-toggle="dropdown">
            Manage
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdown1">
            <li><a className="dropdown-item" href="/dashboard/store">Active Store</a></li>
            <li><a className="dropdown-item" href="/dashboard/store-request">Request Store</a></li>
          </ul>
        </div>
      </header>
      <div className="con-right">
        <table className="store-request mb-5">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Store</th>
              <th>Email</th>
              <th>NPWP</th>
              <th className="detail">Detail</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
            <tr key={store.id}>
              <td>
                {store.fullName.length >= 25 ? 
                `${store.fullName.slice(0,25)}...` : 
                `${store.fullName}`}
              </td>
              <td>
                {store.storeName.length >= 25 ? 
                `${store.storeName.slice(0,25)}...` : 
                `${store.storeName}`}
              </td>
              <td>
                {store.email}
              </td>
              <td>{store.npwp}</td>
              <td>
                <Link className="Link" to={`${path}/${store.id}`}>
                  Detail
                </Link>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StoreRequest;


const stores = [
  {
    'id': 1,
    'fullName': 'Rafi Ardiansyah',
    'storeName': 'Rafi Store',
    'email': 'rafi@gmail.com',
    'npwp': '979789789797'
  },
  {
    'id': 2,
    'fullName': 'Ardi Hanafi',
    'storeName': 'Ardi Store',
    'email': 'ardi@gmail.com',
    'npwp': '234234222432'
  },
]