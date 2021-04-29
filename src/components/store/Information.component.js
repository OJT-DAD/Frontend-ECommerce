import { useState } from 'react';

const Information = () => {
  const [edit, setEdit] = useState({ change: false });

  const handleEdit = () => {
    setEdit({  ...edit, change: !edit.change })
  };

  return (
    <div className="con-sto mt-3 py-4">
      <div className="d-flex justify-content-between info">
        <h4>Store Information</h4>
        {!edit.change ? 
        (<button className="px-3 my-auto edit" onClick={handleEdit}>Edit</button>) :
        (<button className="px-3 my-auto save" onClick={handleEdit}>Save</button>)}
      </div>
      <div className="px-3 mt-3">
        <div className="d-flex">
          <div className="left">
            <h5>Name</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<input type="text" placeholder="Store Name" className="form-control" disabled/>) :
            (<input type="text" placeholder="Store Name" className="form-control"/>)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Description</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<textarea type="text" placeholder="Store Description" className="form-control" disabled/>) :
            (<textarea type="text" placeholder="Store Description" className="form-control"/>)}
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="left">
            <h5>Address</h5>
          </div>
          <div className="right">
            {!edit.change ?
            (<textarea type="text" placeholder="Store Address" className="form-control" disabled/>) :
            (<textarea type="text" placeholder="Store Address" className="form-control"/>)}
          </div>
        </div>
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
            (<input type="text" placeholder="Shipment Price" className="form-control right ml-3" disabled/>) :
            (<input type="text" placeholder="Shipment Price" className="form-control right ml-3"/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;
