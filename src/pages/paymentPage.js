import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTransactionData } from '../redux/actions/transactionAction';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/payment.css';

const PaymentPage = ({ dispatchGetTransactionAction }) => {
  const [data, setData] = useState();
  const [storeName, setStoreName] = useState();
  const [productList, setProductList] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [address, setAddress] = useState();
  const [note, setNote] = useState();
  const [shippingMethod, setShippingMethod] = useState();
  const [paymentMethod, setPaymentMethod] = useState();


  const history = useHistory();
  
  useEffect(() => {
    dispatchGetTransactionAction(2, (data) => {
      setData(data.transactions);
      setStoreName(data.transactions.store.storeName);
      setProductList(data.transactions.lists);
      setTotalPrice(data.transactions.totalTransactionPrice);
      setAddress(data.transactions.shippingAddress);
      setNote(data.transactions.note);
      setShippingMethod(data.transactions.shippingMethod);
      setPaymentMethod(data.transactions.paymentMethod);
    })
  }, [dispatchGetTransactionAction]);

  console.log('hahahah', data)
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
                <th>{storeName}</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productList && 
              (<>
              {productList.map((list) => (
                <tr className="bb" key={list.productId}>
                <td>
                  <span className="d-flex">
                      <img src={list.productImageUrl} alt=""/>
                      <h4 className="m-0 my-auto">{list.productName}</h4>
                  </span>
                </td>
                <td>{list.productPrice}</td>
                <td>{list.productCount}</td>
                <td>{list.totalProductPrice}</td>
              </tr>
              ))}
              </>)}
              {/* <tr className="aa">
                <td></td>
                <td></td>
                <td>Total Price</td>
                <td>{totalPrice}</td>
              </tr> */}
            </tbody>
          </table>
          <table className="info">
            <thead>
              <tr>
                <th className="name">Address</th>
                <th className="data">{address}</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Message</th>
                <th className="data">{note}</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Shipment</th>
                {shippingMethod && 
                (<th className="data">{shippingMethod.shippingName} ({shippingMethod.shippingCost})</th>)}
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="name">Payment</th>
                {paymentMethod && 
                (<th className="data">{paymentMethod.bankName} ({paymentMethod.bankAccountNumber})</th>)}
                <th>Total Purchase</th>
                <th className="total">{totalPrice}</th>
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

const mapDispatchToProps = dispatch => ({
  dispatchGetTransactionAction: (id, onSuccess, onError) => 
    dispatch(getTransactionData(id, onSuccess, onError))
})
export default connect(null, mapDispatchToProps)(PaymentPage);

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