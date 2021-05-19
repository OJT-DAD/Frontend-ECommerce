import { useState, useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { connect } from 'react-redux';
import { fetchAllStore, deleteStore } from '../../redux/actions/storesActionCreator';
import StoreModalDelete from './StoreModalDelete.component'

const Store = ({ stores, dispatchGetAllStoreAction, dispatchDeleteStoreAction }) => {
  const [selected, setSelected] = useState('');

  const history = useHistory();
  const {path} = useRouteMatch();
  const { addToast } = useToasts();

  const handleBack = () => {
    history.replace("/dashboard")
  };

  useEffect(() => dispatchGetAllStoreAction(), [dispatchGetAllStoreAction])

  const showDeleteModal = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteStore').modal('show');
  };

  const handleOnDelete = () => {
    dispatchDeleteStoreAction(selected, () => {
      window.$('#modalDeleteStore').modal('hide');
      addToast('Delete Store Successfully.', {appearance:'warning'});
    }, (message) => {
      window.$('#modalDeleteStore').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  console.log('hehe', path);
  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Active Store</h4>
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
        <table className="store mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Contact</th>
              <th className="detail">Detail</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          {stores.length > 0 ?
          <tbody>
            {stores.map((store) => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>
                {store.description.length >= 25 ? 
                `${store.description.slice(0,25)}...` : 
                `${store.description}`}
              </td>
              <td>
                {store.address.length >= 25 ? 
                `${store.address.slice(0,25)}...` : 
                `${store.address}`}
              </td>
              <td>{store.contact}</td>
              <td>
                <Link className="Link" to={`${path}/${store.id}`}>
                  Detail
                </Link>
              </td>
              <td>
                <button onClick={(e) => showDeleteModal(e, store.id)}>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>:
          <div className="text-center mt-5">
              <h2 className="text-center"> There is no store signed </h2>
          </div>
          }
        </table>
      </div>
      <StoreModalDelete handleOnDelete={handleOnDelete}/>
    </div>
  )
}

const mapStateToProps = state => ({ stores: state.stores });
const mapDispatchToProps = dispatch => ({
  dispatchGetAllStoreAction: () => dispatch(fetchAllStore()),
  dispatchDeleteStoreAction: (id, onSuccess, onError) => 
    dispatch(deleteStore(id, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(Store);



// const Data = [
//   {
//     'id': 1,
//     'store_name': 'QB Store',
//     'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
//     'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
//     'contact': '0-21-740-0122'
//   },
//   {
//     'id': 2,
//     'store_name': 'QB Store',
//     'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
//     'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
//     'contact': '0-21-740-0122'
//   },
//   {
//     'id': 3,
//     'store_name': 'QB Store',
//     'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
//     'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
//     'contact': '0-21-740-0122'
//   },
// ]