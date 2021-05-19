import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import { deleteAdminShipment, fetchAllAdminShipment, createAdminShipment } from '../../redux/actions/adminShipmentActionCreator';
import ShipmentModalDelete from './ShipmentModalDelete.component';

const Shipment = ({
  dispatchFetchAllAdminShipmentAction,
  dispatchDeleteAdminShipment,
  dispatchCreateAdminShipment,
  adminShipments
}) => {

  const [selected, setSelected] = useState();
  const [shipmentName, setShipmentName] = useState('');
  const [shipmentCost, setShipmentCost] = useState();

  const history = useHistory();

  const { addToast } = useToasts();

  const handleBack = () => {
    history.replace('/dashboard')
  };

  //redux load data
  useEffect(() => {
    dispatchFetchAllAdminShipmentAction()
  }, [dispatchFetchAllAdminShipmentAction]);

  const showModalDeleteShipment = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteShipment').modal('show');
  };

  const handleOnDelete = () => {
    dispatchDeleteAdminShipment(selected, () => {
      window.$('#modalDeleteStore').modal('hide');
      addToast('Delete Store Successfully.', {appearance:'warning'});
    }, (message) => {
      window.$('#modalDeleteStore').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {shipmentName, shipmentCost}
    dispatchCreateAdminShipment( data , () => {
      dispatchFetchAllAdminShipmentAction()
      addToast('Create Shipment Method Successfully.', {appearance:'success'});
      setTimeout(()=> {
        window.location.reload();
      }, 1000)
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Shipment</h4>
      </header>
      <div className="con-right shipment p-4">
        <div className="d-flex">
          <h4>Shipping Method</h4>
          <h4>Price</h4>
        </div>
        {adminShipments.map((shipment) => (
        <div className="d-flex" key={shipment.id}>
          <label>{shipment.shippingMethodName}</label>
          <label>{shipment.shippingCost}</label>
          <span onClick={(e) => showModalDeleteShipment(e, shipment.id)}>
            <i className="fas fa-trash ml-3"/>
          </span>
        </div>
        ))}
        <form className="d-flex" onSubmit={handleOnSubmit}>
          <input 
            className="form-control" 
            placeholder="Shipping Method"
            onChange={(e) => setShipmentName(e.target.value)} />
          <input 
            className="form-control ml-3" 
            placeholder="Price"
            onChange={(e) => setShipmentCost(parseFloat(e.target.value))} />
          <button type="submit" className="add py-1 px-2 my-auto ml-3">Add</button>
        </form>
      </div>
      <ShipmentModalDelete handleOnDelete={handleOnDelete}/>
    </div>
  )
}

const mapStateToProps = state => ({ 
  adminShipments : state.adminShipments
});
const mapDispatchToProps = dispatch => ({
  dispatchFetchAllAdminShipmentAction: () => dispatch(fetchAllAdminShipment()),
  dispatchDeleteAdminShipment: (id, onSuccess, onError) => 
    dispatch(deleteAdminShipment(id, onSuccess, onError)),
  dispatchCreateAdminShipment: (data, onSuccess, onError) =>
    dispatch(createAdminShipment(data, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(Shipment);