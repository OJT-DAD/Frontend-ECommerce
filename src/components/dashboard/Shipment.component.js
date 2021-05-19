import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ShipmentModalDelete from './ShipmentModalDelete.component';

const Shipment = () => {
  const [selected, setSelected] = useState();

  const history = useHistory();

  const handleBack = () => {
    history.replace('/dashboard')
  };

  const showModalDeleteShipment = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteShipment').modal('show');
  };

  const handleOnDelete = () => {};

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
        {ShipmentData.map((shipment) => (
        <div className="d-flex" key={shipment.id}>
          <label>{shipment.shippingMethodName}</label>
          <label>Rp. {shipment.shippingCost}</label>
          <span onClick={(e) => showModalDeleteShipment(e, shipment.id)}>
            <i className="fas fa-trash ml-3"/>
          </span>
        </div>
        ))}
        <form className="d-flex">
          <input className="form-control" placeholder="Shipping Method"/>
          <input className="form-control ml-3" placeholder="Price"/>
          <button className="add py-1 px-2 my-auto ml-3">Add</button>
        </form>
      </div>
      <ShipmentModalDelete handleOnDelete={handleOnDelete}/>
    </div>
  )
}

export default Shipment;

const ShipmentData = [
  {
    "id": 1,
    "shippingMethodName": "JNT",
    "shippingCost": "10.000"
  },
  {
    "id": 2,
    "shippingMethodName": "JNE",
    "shippingCost": "15.000"
  },
  {
    "id": 3,
    "shippingMethodName": "POS",
    "shippingCost": "20.000"
  },
]