import React from "react";

const TransactionData = ({ trans }) => {
  var status = trans.status;
  if (trans.status === 1) {
    status = (<h4 className="status-waiting">Waiting Payment Confirmation</h4>);
  }
  else if(trans.status === 2) {
    status = (<h4 className="status-packing">On Packing</h4>);
  }
  else if(trans.status === 3) {
    status = (<h4 className="status-delivery">On Delivery</h4>);
  }
  else if(trans.status === 4) {
    status = (<h4 className="status-delivered">Delivered</h4>);
  }

  return (
    <>
      <table key={trans.id} className="trans">
        <thead>
          <tr className="bb">
            <th>{trans.store_name}</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {trans.lists.map((list) => (
            <tr className="bb" key={list.id}>
              <td>
                <span className="d-flex">
                  <img src={list.image} alt="" />
                  <h4 className="m-0 my-auto">{list.product_name}</h4>
                </span>
              </td>
              <td>Rp. {list.price}</td>
              <td>{list.count}</td>
              <td>Rp. {list.total_price}</td>
            </tr>
          ))}
          <tr className="aa">
            <td></td>
            <td></td>
            <td>Total Price</td>
            <td>Rp. {trans.total_price}</td>
          </tr>
        </tbody>
      </table>
      <table className="detail">
        <thead>
          <tr>
            <td>Total Purchase</td>
            <td className="data">Rp. {trans.total_purchase}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Address</td>
            <td className="data">{trans.address}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Message</td>
            <td className="data">{trans.message}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Shipment</td>
            <td className="data">
              {trans.shipment.name} (Rp. {trans.shipment.price})
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Payment</td>
            <td className="data">{trans.payment.name}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Status</td>
            <td className="data">
              <h4>{status}</h4>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default TransactionData;
