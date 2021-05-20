import { useEffect } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { acceptNewSeller, fetchNewSellerById, rejectNewSeller } from '../../redux/actions/adminNewSellerActionCreator';

const StoreRequestDetail = ({
  dispatchGetNewSellerByIdAction,
  dispatchAcceptNewSellerAction,
  dispatchRefuseNewSellerAction,
  adminNewSellers
}) => {
  const history = useHistory();

  const {storeId} = useParams();
  const { addToast } = useToasts();

  const acceptNewSeller = (id) => {
    dispatchAcceptNewSellerAction( id , () => {
      history.replace('/dashboard/store-request')
      addToast('New Seller Accepted', {appearance:'success'});
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };
  const rejectNewSeller = (id) => {
    dispatchRefuseNewSellerAction( id , () => {
      history.replace('/dashboard/store-request')
      addToast('New Seller Rejected.', {appearance:'warning'});
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };
  //redux load data
  useEffect(() => {
    dispatchGetNewSellerByIdAction(storeId)
  }, [dispatchGetNewSellerByIdAction]);

  const cek = () => {
    console.log(adminNewSellers)
  }

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <button onClick={cek}>cek</button>
        <h4>Store Request Detail</h4>
      </header>
      <div className="con-right reqStoreDetail p-4">
        <div className="d-flex">
          <label>Username</label>
          <label>{adminNewSellers.username}</label>
        </div>
        <div className="d-flex">
          <label>Email</label>
          <label>{adminNewSellers.email}</label>
        </div>
        <div className="d-flex">
          <label>Number Id</label>
          <label>{adminNewSellers.idCardNumber}</label>
        </div>
        <div className="d-flex">
          <label>Store Name</label>
          <label>{adminNewSellers.storeName}</label>
        </div>
        <div className="d-flex">
          <label>Description</label>
          <label>{adminNewSellers.storeDescription}</label>
        </div>
        <div className="d-flex">
          <label>NPWP</label>
          <label>{adminNewSellers.npwp}</label>
        </div>
        <div className="d-flex">
          <label>Address</label>
          <label>{adminNewSellers.storeAddress}</label>
        </div>
        <div className="d-flex">
          <label>Contact</label>
          <label>{adminNewSellers.storeContact}</label>
        </div>
        <div className="d-flex">
          <label>Action</label>
          <div className="d-flex">
            <button className="delete py-1 px-2 my-auto" onClick={() => rejectNewSeller(adminNewSellers.id)}>Reject</button>
            <button className="add py-1 px-2 my-auto ml-3" onClick={() => acceptNewSeller(adminNewSellers.id)}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({ 
  adminNewSellers: state.adminNewSellers 
});
const mapDispatchToProps = dispatch => ({
  dispatchGetNewSellerByIdAction: (id, onSuccess, onError) => 
    dispatch(fetchNewSellerById(id, onSuccess, onError)),
  dispatchAcceptNewSellerAction: (id, onSuccess, onError) =>
    dispatch(acceptNewSeller(id, onSuccess, onError)),
  dispatchRefuseNewSellerAction: (id, onSuccess, onError) =>
    dispatch(rejectNewSeller(id, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(StoreRequestDetail);