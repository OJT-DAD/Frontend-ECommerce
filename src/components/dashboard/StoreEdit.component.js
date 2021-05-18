import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useParams } from 'react-router-dom';
import { getStoreById, updateStoreById } from '../../redux/actions/storesActionCreator';

const StoreEdit = ({ dispatchGetStoreByIdAction, dispatchUpdateStoreAction }) => {
  const history = useHistory();
  const { addToast } = useToasts();
  
  const [edit, setEdit] = useState({change: false});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  

  const { storeId } = useParams();
  const id = parseInt(storeId);
  
  const handleEdit = () => {
    setEdit({ ...edit, change: !edit.change })
  }

  useEffect(() => {
    if (id) {
      dispatchGetStoreByIdAction(id, data => 
      {
        setName(data.store.name);
        setAddress(data.store.address);
        setDescription(data.store.description);
        setContact(data.store.contact);
      })
    }
  }, [dispatchGetStoreByIdAction, id])
  
  const handleOnSubmit = event => {
    event.preventDefault();
    const data = { id, name, address, description, contact };
    dispatchUpdateStoreAction(id, data, () => {
      addToast('Update Store Successfully.', {appearance:'success'});
      handleEdit();
    }, (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };
  
  
// console.log('hehe', dispatchUpdateStoreAction)
  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Store Detail</h4>
      </header>
      <div className="con-right p-4">

        <form onSubmit={handleOnSubmit}>
          <div className="d-flex mb-3">
            <label>Name</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Store Name"
              value={name}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="Store Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />)}
          </div>
          
          <div className="d-flex mb-3">
            <label>Address</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Store Address"
              value={address}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="Store Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
            />)}
          </div>

          <div className="d-flex mb-3">
            <label>Description</label>
            {!edit.change ?
            (<textarea
              required
              type="text"
              placeholder="Store Description"
              value={description}
              disabled
              className="form-control"
            />):
            (<textarea
              required
              type="text"
              placeholder="Store Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            />)}
          </div>

          <div className="d-flex mb-3">
            <label>Contact</label>
            {!edit.change ?
            (<input
              required
              type="text"
              placeholder="Contact"
              value={contact}
              disabled
              className="form-control"
            />):
            (<input
              required
              type="text"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
            />)}
          </div>
          
          {edit.change && 
          (<div className="d-flex">
            <button className="back px-2 ml-auto" type="button" onClick={handleEdit}>Cancel</button>
            <button className="add px-2 ml-2" type="submit">Save</button>
          </div>)}
        </form>
        <div className="d-flex">
          {!edit.change &&
          (<button className="edit px-2 ml-auto" onClick={handleEdit}>Edit</button>)}
        </div>
      </div>
    </div>
  ) 
}

const mapDispatchToProps = dispatch => ({
  dispatchGetStoreByIdAction: (id, onSuccess) => 
    dispatch(getStoreById(id, onSuccess)),
  dispatchUpdateStoreAction: (id, data, onSuccess, onError) => 
    dispatch(updateStoreById(id, data, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(StoreEdit);