import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SellingDetail = ({ auth }) => {
  
  const history = useHistory();
  
  const handleBack = () => {
    history.replace(`/store/${auth.storeId}/selling`)
  };

  const acceptPayment = () => {};

  const rejectPayment = () => {};

  const x = Data.status;

  return (
    <div className="selling-detail">
      <div className="con-sto mt-3">
        <header className="d-flex justify-content-between ">
          <button className="back my-auto" onClick={handleBack}>
            <i className="fas fa-arrow-left" />
            Back
          </button>
          <h4 className="my-auto">Selling Detail</h4>
          <span></span>
        </header>
      </div>
      <div className="con-sto mt-1 py-2 px-4">
        <header>
          <h4 className="bb pb-2">Transaction</h4>
        </header>
        <div className="d-flex mt-1">
          <label>Username</label>
          <input className="form-control" value={Data.userName} readonly/>
        </div>
        <div className="d-flex mt-1">
          <label>Address</label>
          <input className="form-control" value={Data.address} readonly/>
        </div>
        <div className="d-flex mt-1">
          <label>Note</label>
          <textarea className="form-control" value={Data.note} readonly/>
        </div>
        <div className="d-flex mt-1">
          <label>Payment</label>
          <input className="form-control" value={Data.paymentMethod} readonly/>
        </div>
        <div className="d-flex mt-1">
          <label>Transaction Price</label>
          <input className="form-control" value={Data.totalTransactionPrice} readonly/>
        </div>
        <div className="d-flex mt-1">
          <label>Shipment</label>
          <div className="d-flex mt-1">
            <input className="form-control" value={Data.shippingMethod.shippingMethodName} readonly/>
            <input className="form-control ml-3" value={Data.shippingMethod.shippingCost} readonly/>
          </div>
        </div>
        <div className="d-flex mt-1">
          <label>Payment Slip</label>
          <img className="payment-image" src={Data.paymentSlip} alt="paymentSlip"/>
        </div>
      </div>
      <div className="con-sto mt-1 py-2 px-4">
        <header>
          <h4 className="bb pb-2">Product</h4>
        </header>
        <div className="d-flex mt-1">
          <label>Product</label>
          <div className="con-product-list">
            {Data.products.map((product) => (
            <div className="d-flex">
              <img src={product.productImageUrl} alt="productTransaction"/>
              <div className="d-flex justify-content-evenly my-auto" style={{width: '100%'}}>
                <div>
                  <h5>Product name</h5>
                  <h5>{product.productName}</h5>
                </div>
                <div>
                  <h5>Price</h5>
                  <h5>{product.unitPrice}</h5>
                </div>
                <div>
                  <h5>Quantity</h5>
                  <h5 className="text-center">{product.quantity}</h5>
                </div>
                <div>
                  <h5>Total Price</h5>
                  <h5>{product.totalPrice}</h5>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="con-sto mt-1 py-2 px-4">
        <header>
          <h4 className="bb pb-2">Status</h4>
        </header>
        <div>
          <h5>{status[x]}</h5>
          <button onClick={rejectPayment}>Reject</button>
          <button onClick={acceptPayment}>Accept</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(SellingDetail);


const Data = {
  "transactionIndexId": 1,
  "userName": "Ardi Hanafi",
  "address": "Cakung, Jakarta Timur",
  "note": "Kirim Sesuai Pesanan",
  "paymentMethod": "BNI",
  "totalTransactionPrice": "Rp. 200.000,00",
  "paymentSlip": "https://www.pakaiatm.com/wp-content/uploads/2020/10/Bukti-Transfer-dari-Mesin-ATM.jpg",
  "status": 1,
  "shippingMethod": {
    "shippingMethodId": 1,
    "shippingMethodName": "JNE",
    "shippingCost": "Rp. 20.000,00"
  },
  "products": [
    {
      "productId": 1,
      "productName": "Product Keren",
      "productImageUrl": "https://cdn-2.tstatic.net/wartakota/foto/bank/images/donasi-barang-bekas_8877.jpg",
      "unitPrice": "Rp. 60.000,00",
      "quantity": 3,
      "totalPrice": "Rp. 180.000,00"
    }
  ]
}

const status = {
  '1': "Waiting For Payment",
  '2': "Waiting For Confirmation",
  '3': "On Proccess",
  '4': "On Delivery",
  '5': "Arrived",
  '6': "Product Received",
}