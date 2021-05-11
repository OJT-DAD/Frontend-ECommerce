import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getStoreById, updateStoreById } from '../../redux/actions/storesActionCreator';


const Information = ({ dispatchGetStoreByIdAction, dispatchUpdateStoreAction }) => {
  const { params } = useRouteMatch();
  const storeId = params.storeId;

  const { addToast } = useToasts()

  const [edit, setEdit] = useState({ change: false });
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleEdit = () => {
    setEdit({  ...edit, change: !edit.change })
  };

  useEffect(() => {
    dispatchGetStoreByIdAction(storeId, (data) => 
    {
      setName(data.store.name);
      setDescription(data.store.description);
      setAddress(data.store.address);
      setContact(data.store.contact);
    })
  }, [dispatchGetStoreByIdAction, storeId]);

  const handleOnSubmit = event => {
    event.preventDefault();
    const id = parseInt(storeId);
    const data = { id, name, description, address, contact };
    dispatchUpdateStoreAction(id, data, () => {
      addToast('Update Store Successfully.', {appearance:'success'});
    }, (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };

  // console.log('okee', history.location.pathname);
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
          <div className="right d-flex">
            {!edit.change ?
            (<input type="text" placeholder="Bank Name" className="form-control left" disabled/>) :
            (<input type="text" placeholder="Bank Name" className="form-control left"/>)}
            {!edit.change ?
            (<input type="text" placeholder="Account Number" className="form-control right ml-3" disabled/>) :
            (<input type="text" placeholder="Account Number" className="form-control right ml-3"/>)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Shipment</h5>
          </div>
          <div className="right d-flex">
            {!edit.change ?
            (<input type="text" placeholder="Shipment Name" className="form-control left" disabled/>) :
            (<input type="text" placeholder="Shipment Name" className="form-control left"/>)}
            {!edit.change ?
            (<input
              type="text" 
              placeholder="Shipment Price" 
              className="form-control right ml-3"
              disabled/>) :
            (<input
              type="text" 
              placeholder="Shipment Price" 
              className="form-control right ml-3"
            />)}
          </div>
        </div>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  dispatchGetStoreByIdAction: (storeId, onSuccess) =>
    dispatch(getStoreById(storeId, onSuccess)),
  dispatchUpdateStoreAction: (id, data, onSuccess, onError) => 
    dispatch(updateStoreById(id, data, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(Information);
