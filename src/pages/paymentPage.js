import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/payment.css';

const PaymentPage = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar />
      {Data.map((trans) => (
      <div className="con-payment">
        <header>
          <h2>Payment</h2>
        </header>
        <div className="con-pay">
          <table key={trans.id} className="payment">
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
                      <img src={list.image} alt=""/>
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
          <table className="info">
            <thead>
              <tr>
                <th className="name">Address</th>
                <th className="data">{trans.address}</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Message</th>
                <th className="data">{trans.message}</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Shipment</th>
                <th className="data">{trans.shipment.name} (Rp. {trans.shipment.price})</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Payment</th>
                <th className="data">{trans.payment.name} ({trans.payment.account})</th>
                <th>Total Purchase</th>
                <th className="total">Rp {trans.total_purchase}</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="con-pay d-flex mt-2">
          <label className="payment">Proof of payment</label>
          <div className="input-group">
            <input type="file" className="form-control"/>
            <button type="button" onClick={()=>{history.push(`/transaction/${trans.id}`)}}>Upload</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default PaymentPage

const Data = [
  {
    'id': 1,
    'store_name': 'QB Store',
    'lists': [
      {
        'id': 1,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini',
        'count': 2,
        'price': '100.000',
        'total_price': '200.000'
      },
      {
        'id': 2,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini',
        'count': 2,
        'price': '100.000',
        'total_price': '200.000'
      }
    ],
    'address': 'Jl Pasar Baru Brt V/92 RT 013/003, Dki Jakarta',
    'message': 'Please send fast',
    'shipment': {
      'id':'1',
      'name': 'JNT',
      'price': '30.000'
    },
    'payment': {
      'name': 'BRI',
      'account': '563101017240538'
    },
    'total_price': '400.000',
    'total_purchase': '430.000'
  }
]