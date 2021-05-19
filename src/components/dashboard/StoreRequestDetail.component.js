import { useHistory } from 'react-router-dom';

const StoreRequestDetail = () => {
  const history = useHistory();

  const acceptNewSeller = () => {};
  const rejectNewSeller = () => {};

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Store Request Detail</h4>
      </header>
      <div className="con-right reqStoreDetail p-4">
        <div className="d-flex">
          <label>Username</label>
          <label>{Data.username}</label>
        </div>
        <div className="d-flex">
          <label>Email</label>
          <label>{Data.email}</label>
        </div>
        <div className="d-flex">
          <label>Number Id</label>
          <label>{Data.idCardNumber}</label>
        </div>
        <div className="d-flex">
          <label>Store Name</label>
          <label>{Data.storeName}</label>
        </div>
        <div className="d-flex">
          <label>Description</label>
          <label>{Data.storeDescription}</label>
        </div>
        <div className="d-flex">
          <label>NPWP</label>
          <label>{Data.npwp}</label>
        </div>
        <div className="d-flex">
          <label>Address</label>
          <label>{Data.storeAddress}</label>
        </div>
        <div className="d-flex">
          <label>Contact</label>
          <label>{Data.storeContact}</label>
        </div>
        <div className="d-flex">
          <label>Action</label>
          <div className="d-flex">
            <button className="delete py-1 px-2 my-auto" onClick={rejectNewSeller}>Reject</button>
            <button className="add py-1 px-2 my-auto ml-3" onClick={acceptNewSeller}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreRequestDetail;

const Data = {
  'username': 'Ardi Hanfi',
  'email': 'ardi@gmail.com',
  'idCardNumber': '23432923424323',
  'storeName': 'Ardi Store',
  'storeDescription': 'Ini toko asli milik ardi',
  'npwp': '76876886865475',
  'storeAddress': 'Cakung, Jakarta Timur',
  'storeContact': '0858585856747'
}