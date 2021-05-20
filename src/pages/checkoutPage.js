import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartDetailById } from '../redux/actions/cartActionCreator';
import { fetchAllSellerPayment } from '../redux/actions/sellerPaymentActionCreator';
import { fetchAllSellerShipment } from '../redux/actions/sellerShipmentActionCreator';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/checkout.css';

const CheckoutPage = ({ 
  dispatchGetCartDetailAction, 
  dispatchFetchAllSellerPaymentAction, 
  dispatchFetchAllSellerShipmentAction,
  sellerPayments,
  sellerShipments
}) => {

  const [shipment, setShipment] = useState();
  const [cartDetail, setCartDetail] = useState();
  const [cartDetailList, setCartDetailList] = useState();
  const [storeId, setStoreId] = useState(0); 
  
  const history = useHistory();
  const { checkoutId } = useParams();
  
  
  useEffect(() => {
    dispatchGetCartDetailAction(checkoutId, (data) => {
      setCartDetail(data.cartDetails)
      setCartDetailList(data.cartDetails.lists)
      setStoreId(data.cartDetails.storeId)
    })
  }, [checkoutId, dispatchGetCartDetailAction]);
  

  // FETCH ALL PAYMENT & SHIPMENT
  useEffect(() => {
    if(storeId !== 0){
      dispatchFetchAllSellerPaymentAction(storeId)
      dispatchFetchAllSellerShipmentAction(storeId)
    }
  }, [dispatchFetchAllSellerPaymentAction, dispatchFetchAllSellerShipmentAction, storeId])


  // console.log('hehe', sellerShipments)
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
              			<input type="text" className="form-control" placeholder="Address"/>
								</th>
								<th className="label">
										<label>Shipment</label>
								</th>
								<th>
										<select className="form-select" onChange={(e)=>setShipment(e.target.value)} value={shipment}>
											<option value="">Chose Shipment</option>
											{sellerShipments.map((ship)=> (
                        <option value={ship.id}>{ship.shippingName}</option>
											))}
										</select>
								</th>
								<th>
									{shipment && (<h4>Rp. {shipment}</h4>) }
								</th>
							</tr>
							<tr>
								<th className="label">
										<label>Message</label>
								</th>
								<th>
										<textarea className="form-control" placeholder="(opsional) send message to seller"/>
								</th>
								<th className="label">
										<label>Payment</label>
								</th>
								<th>
									<select className="form-select">
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
          <button type="button" onClick={()=>{history.push(`/payment/${cartDetail.id}`)}}>Checkout</button>
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
  dispatchFetchAllSellerPaymentAction: (storeId) => dispatch(fetchAllSellerPayment(storeId)),
  dispatchFetchAllSellerShipmentAction: (storeId) => dispatch(fetchAllSellerShipment(storeId))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
