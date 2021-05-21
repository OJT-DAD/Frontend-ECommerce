import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { getCartDetailById } from '../redux/actions/cartActionCreator';
import { fetchAllSellerPayment } from '../redux/actions/sellerPaymentActionCreator';
import { fetchAllSellerShipment } from '../redux/actions/sellerShipmentActionCreator';
import { 
  userTransaction,
  setCheckoutPayment, 
  setCheckoutShipping,
  userAdditionalData
} from '../redux/actions/checkoutActionCreator';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/checkout.css';

const CheckoutPage = ({ 
  dispatchGetCartDetailAction, 
  dispatchFetchAllSellerPaymentAction, 
  dispatchFetchAllSellerShipmentAction,
  dispatchSetCheckoutPayment,
  dispatchSetCheckoutShipping,
  dispatchUserAdditionalData,
  dispatchUserTransactionAction,
  sellerPayments,
  sellerShipments
}) => {

  const [cartDetail, setCartDetail] = useState();
  const [cartDetailList, setCartDetailList] = useState();
  const [storeId, setStoreId] = useState(0); 
  const [payment, setPayment] = useState();
  const [shipment, setShipment] = useState();
  const [shippingPrice, setShippingPrice] = useState(null);
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  
  const history = useHistory();
  const { addToast } = useToasts();
  const { checkoutId } = useParams();
  
  // FETCH ALL PAYMENT & SHIPMENT BY STORE
  useEffect(() => {
    if(storeId !== 0){
      dispatchFetchAllSellerPaymentAction(storeId)
      dispatchFetchAllSellerShipmentAction(storeId)
    }
  }, [dispatchFetchAllSellerPaymentAction, dispatchFetchAllSellerShipmentAction, storeId])
  
  // GET CHECKOUT DATA
  useEffect(() => {
    dispatchGetCartDetailAction(checkoutId, (data) => {
      setCartDetail(data.cartDetails);
      setCartDetailList(data.cartDetails.lists);
      setStoreId(data.cartDetails.storeId);
      setPayment(data.cartDetails.paymentId);
      setShipment(data.cartDetails.shippingId);
      setShippingPrice(data.cartDetails.shippingCost);
    })
  }, [checkoutId, dispatchGetCartDetailAction]);
  
  // SET CHECKOUT PAYMENT & SHIPPING
  const cartIndexId = parseInt(checkoutId);
  const paymentId = parseInt(payment);
  const shippingId = parseInt(shipment)
  useEffect(() => {
    if(paymentId !== 0 || paymentId !== null) {
      dispatchSetCheckoutPayment({ cartIndexId, paymentId })
    }
  }, [dispatchSetCheckoutPayment, cartIndexId, paymentId])
  useEffect(() => {
    if(shippingId !== 0 || shippingId !== null) {
      dispatchSetCheckoutShipping({ cartIndexId, shippingId })
    }
  }, [dispatchSetCheckoutShipping, cartIndexId, shippingId])
  
  // HANDLE CHECKOUT
  const handleCheckout = (event) => {
    event.preventDefault();
    const shippingAddress = address;
    if(shippingAddress !== '') {
      dispatchUserAdditionalData({cartIndexId, shippingAddress, note}, (response) => {
        // history.push(`/payment/${response}`)
        console.log('hehe', response)
      }, (message) => addToast(`Error: ${message}`, {appearance:'error'}));
      dispatchUserTransactionAction(cartIndexId);
    } else {
      addToast('Please insert your address!', {appearance: 'warning'})
    }
  }


  console.log('hehe', shippingPrice)
  return (
    <>
    {cartDetail !== undefined && 
    (<div>
      <Navbar />
      <div className="con-checkout">
        <header>
          <h2>Checkout</h2>
        </header>
        <div className="con-detail">
          <table className="store">
            <thead>
              <tr className="bb">
                <th>{cartDetail.storeName}</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartDetailList !== undefined && 
              (<>
                {cartDetailList.map((list) => (
                <tr className="bb" key={list.id}>
                  <td>
                    <span className="d-flex">
                        <img src={list.productImageUrl} alt=""/>
                        <h4 className="m-0 my-auto">{list.productName}</h4>
                    </span>
                  </td>
                  <td>{list.productPrice}</td>
                  <td>{list.quantity}</td>
                  <td>{list.totalPrice}</td>
                </tr>
                ))}
              </>)}
              <tr>
                <td></td>
                <td></td>
                <td>Total Price</td>
                <td className="total">{cartDetail.totalCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
				<form className="con-detail mt-1">
					<table className="detail">
						<thead>
							<tr>
								<th className="label">
										<label>Address</label>
								</th>
								<th>
              			<input 
                      type="text" 
                      className="form-control" 
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
								</th>
								<th className="label">
										<label>Shipment</label>
								</th>
								<th>
										<select className="form-select" value={shipment} onChange={(e)=>setShipment(e.target.value)}>
											<option value="">Chose Shipment</option>
											{sellerShipments.map((ship)=> (
                        <option value={ship.id}>{ship.shippingName}</option>
											))}
										</select>
								</th>
								<th>
									{shippingPrice !== null && (<h4>{shippingPrice}</h4>) }
								</th>
							</tr>
							<tr>
								<th className="label">
										<label>Message</label>
								</th>
								<th>
										<textarea 
                      className="form-control" 
                      placeholder="(opsional) send message to seller"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
								</th>
								<th className="label">
										<label>Payment</label>
								</th>
								<th>
									<select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option value="">Chose Payment</option>
                    {sellerPayments.map((payment) => (
										<option value={payment.id}>{payment.bankName}</option>
                    ))}
									</select>
								</th>
								<th></th>
							</tr>
						</thead>
					</table>
				</form>
        <div className="con-purchace mt-3">
          <h4>Total Purchase <span>{cartDetail.finalTotalCost}</span></h4>
          <button type="button" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>)}
    </>
  )
}


const mapStateToProps = state => ({
  carts: state.carts,
  sellerPayments : state.sellerPayments,
  sellerShipments : state.sellerShipments
});
const mapDispatchToProps = dispatch => ({
  dispatchGetCartDetailAction: (id, onSuccess) => 
    dispatch(getCartDetailById(id, onSuccess)),
    
  dispatchSetCheckoutPayment: (data, onSuccess, onError) =>
    dispatch(setCheckoutPayment(data, onSuccess, onError)),
  dispatchSetCheckoutShipping: (data, onSuccess, onError) =>
    dispatch(setCheckoutShipping(data, onSuccess, onError)),
  
  dispatchUserAdditionalData: (data, onSuccess, onError) =>
    dispatch(userAdditionalData(data, onSuccess, onError)),
  dispatchUserTransactionAction: (id, onSuccess, onError) => 
    dispatch(userTransaction(id, onSuccess, onError)),
  
  dispatchFetchAllSellerPaymentAction: (storeId) => dispatch(fetchAllSellerPayment(storeId)),
  dispatchFetchAllSellerShipmentAction: (storeId) => dispatch(fetchAllSellerShipment(storeId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
