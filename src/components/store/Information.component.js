import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getStoreById, updateStoreById } from '../../redux/actions/storesActionCreator';
import { fetchAllAdminPayment } from '../../redux/actions/adminPaymentActionCreator';
import { fetchAllAdminShipment } from '../../redux/actions/adminShipmentActionCreator';
import { createSellerPayment, fetchAllSellerPayment } from '../../redux/actions/sellerPaymentActionCreator';
import { createSellerShipment, fetchAllSellerShipment } from '../../redux/actions/sellerShipmentActionCreator';

const Information = ({ 
  dispatchGetStoreByIdAction, 
  dispatchUpdateStoreAction,
  dispatchFetchAllAdminPaymentAction,
  dispatchFetchAllAdminShipmentAction,
  dispatchFetchAllSellerPaymentAction,
  dispatchFetchAllSellerShipmentAction,
  dispatchCreateSellerPayment,
  dispatchCreateSellerShipment,
  adminPayments,
  adminShipments,
  sellerPayments,
  sellerShipments
}) => {
  const { params } = useRouteMatch();
  const storeId = params.storeId;

  const { addToast } = useToasts()

  const [edit, setEdit] = useState({ change: false });
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  //asset for payment and shipment
  const [bankId, setBankId] = useState();
  const [bankAccountNumber, setBankAccountNumber] = useState();
  const [shippingMethodId, setShippingMethodId] = useState();

  const handleEdit = () => {
    setEdit({  ...edit, change: !edit.change })
  };

  useEffect(() => {
    dispatchFetchAllAdminPaymentAction()
    dispatchFetchAllAdminShipmentAction()
    dispatchFetchAllSellerPaymentAction(storeId)
    dispatchFetchAllSellerShipmentAction(storeId)
    dispatchGetStoreByIdAction(storeId, (data) => 
    {
      setName(data.store.name);
      setDescription(data.store.description);
      setAddress(data.store.address);
      setContact(data.store.contact);
    })
  }, [dispatchFetchAllAdminPaymentAction, dispatchFetchAllAdminShipmentAction, dispatchFetchAllSellerPaymentAction, dispatchFetchAllSellerShipmentAction ,dispatchGetStoreByIdAction, storeId]);

  const handleOnSubmit = event => {
    event.preventDefault();
    const id = parseInt(storeId);
    const data = { id, name, description, address, contact };
    dispatchUpdateStoreAction(id, data, () => {
      addToast('Update Store Successfully.', {appearance:'success'});
    }, (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };

  const onSubmitPayment = (event) => {
    event.preventDefault();
    const storeId = parseInt(params.storeId)
    const data = {bankId, storeId, bankAccountNumber}
    console.log(data)
    dispatchCreateSellerPayment( data , () => {
      addToast('Create Payment Successfully.', {appearance:'success'});
      setTimeout(()=> {
        window.location.reload();
      }, 1000)
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };


  const onSubmitShipment = (event) => {
    event.preventDefault();
    const storeId = parseInt(params.storeId)
    const data = {shippingMethodId, storeId}
    console.log(data)
    dispatchCreateSellerShipment( data , () => {
      addToast('Create Shipment Successfully.', {appearance:'success'});
      setTimeout(()=> {
        window.location.reload();
      }, 1000)
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  return (
    <div className="con-sto mt-3 py-4">
      <div className="d-flex justify-content-between info">
        <h4>Store Information</h4>
        {!edit.change ? 
        (<button className="px-3 my-auto edit" onClick={handleEdit}>Edit</button>) :
        (null)}
      </div>
      <div className="px-3 mt-3">
      <form 
        onSubmit={handleOnSubmit}
      >
        <div className="d-flex">
          <div className="left">
            <h5>Name</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<input
              type="text" 
              placeholder="Store Name" 
              className="form-control"
              value={name}
            disabled/>) :
            (<input 
              required
              type="text" 
              placeholder="Store Name" 
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Contact</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<input 
              type="text" 
              placeholder="Contact" 
              className="form-control"
              value={contact}
            disabled/>) :
            (<input 
              required
              type="text" 
              placeholder="Contact" 
              className="form-control"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Description</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<textarea 
              type="text" 
              placeholder="Store Description" 
              className="form-control"
              value={description}
            disabled/>) :
            (<textarea 
              required
              type="text" 
              placeholder="Store Description" 
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Address</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<textarea 
              type="text" 
              placeholder="Store Address" 
              className="form-control"
              value={address}
            disabled/>) :
            (<textarea 
              required
              type="text" 
              placeholder="Store Address" 
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />)}
          </div>
        </div>
        {edit.change &&
        (<div className="d-flex my-3">
          <button className="px-3 ml-auto back" onClick={handleEdit}>Cancle</button>
          <button className="px-3 ml-3 save" type="submit">Save</button>
        </div>)}
      </form>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Payment</h5>
          </div>
          <div className="right d-flex flex-column">
            {/* LIST BANK */}
          {
            sellerPayments.map((payment)=> (
            <div className="d-flex mb-2">
                  <input type="text" value={payment.bankName} className="form-control left" disabled/>
                  <input type="text" value={payment.bankAccountNumber} className="form-control right ml-3" disabled/>
            </div>
            ))
          }
            {/* ADD BANK */}
            {edit.change &&
            (<form onSubmit={onSubmitPayment} className="d-flex">
              <select className="form-select" onChange={(e)=> setBankId(parseInt(e.target.value))}>
                <option value="">Chose Shipment</option>
                {adminPayments.map((payment)=> (
                  <option value={payment.id}>{payment.bankName}</option>
                ))}
              </select>
              <input type="text" placeholder="Account Number" className="form-control right ml-3" onChange={(e)=> setBankAccountNumber(e.target.value)} value={bankAccountNumber}/>
              <button type="submit" className="px-3 save my-auto ml-auto">Add</button>
            </form>)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Shipment</h5>
          </div>
          <div className="right d-flex flex-column">
            {/* LIST SHIPMENT */}
            {
            sellerShipments.map((shipment)=> (
            <div className="d-flex mb-2">
                  <input type="text" value={shipment.shippingName} className="form-control left" disabled/>
                  <input type="text" value={shipment.shippingCost} className="form-control right ml-3" disabled/>
            </div>
            ))
          }
            {/* ADD SHIPMENT */}
            {edit.change &&
            (<form className="d-flex" onSubmit={onSubmitShipment}>
              <select className="form-select" onChange={(e)=> setShippingMethodId(parseInt(e.target.value))}>
                <option value="">Chose Shipment</option>
                {adminShipments.map((payment)=> (
                  <option value={payment.id}>{payment.shippingMethodName}</option>
                ))}
              </select>
              <button type="submit" className="px-3 save my-auto ml-auto">Add</button>
            </form>)}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ 
  adminPayments: state.adminPayments,
  adminShipments : state.adminShipments,
  sellerPayments : state.sellerPayments,
  sellerShipments : state.sellerShipments
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchAllAdminPaymentAction: () => dispatch(fetchAllAdminPayment()),
  dispatchFetchAllAdminShipmentAction: () => dispatch(fetchAllAdminShipment()),

  //seller payment and shipment
  dispatchFetchAllSellerPaymentAction: (storeId) => dispatch(fetchAllSellerPayment(storeId)),
  dispatchFetchAllSellerShipmentAction: (storeId) => dispatch(fetchAllSellerShipment(storeId)),
  dispatchCreateSellerPayment: (data, onSuccess, onError) =>
    dispatch(createSellerPayment(data, onSuccess, onError)),
  dispatchCreateSellerShipment: (data, onSuccess, onError) =>
    dispatch(createSellerShipment(data, onSuccess, onError)),

  //others
  dispatchGetStoreByIdAction: (storeId, onSuccess) =>
    dispatch(getStoreById(storeId, onSuccess)),
  dispatchUpdateStoreAction: (id, data, onSuccess, onError) => 
    dispatch(updateStoreById(id, data, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(Information);
