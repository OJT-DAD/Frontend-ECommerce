import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { getProductById } from '../redux/actions/productsActionCreator';
import { addProductToCart } from '../redux/actions/cartActionCreator';
import Navbar from '../components/navbar/Navbar.component';

const ProductPage = ({ auth, dispatchGetProductByIdAction, dispatchAddProductToCart }) => {
  const [products, setProducts] = useState({});
  const [count, setCount] = useState(0);

  // TOAST NOTIFICATIONS
  const { addToast } = useToasts();

  // GET PRODUCT BY PRODUCT ID
  let params = useParams();
  useEffect(() => {
    dispatchGetProductByIdAction(params.productId, (data) =>
    {
      setProducts(data.product)
    });
  }, [dispatchGetProductByIdAction, params.productId]);

  // SET PRODUCT QUANTITY
  let quantity = count;
  const addCount = () => {
    if(count === products.stockProduct)
      return null;
    setCount(count + 1);
  };
  const minCount = () => {
    if(count === 0)
      return null;
    setCount(count - 1);
  };

  // ADD PRODUCT TO CART
  const productId = products.productId;
  const storeId = products.storeId;
  const userId = auth.userId;
  const productName = products.productName;
  const addCartProduct = (event) => {
    event.preventDefault();
    if(quantity === 0) 
      return addToast('Please add product quantity!', {appearance:'warning'})
    else{
      dispatchAddProductToCart({productId, storeId, userId, quantity}, 
        () => addToast(`${productName} added to cart.`, {appearance:'success'}),
        (response) => addToast(`Error: ${response}`, {appearance:'error'}));
    }
  }
  
  // console.log('hhh', quantity)
  return (
    <>
      <Navbar />
      {/* {Data.map((product, index) => ( */}
      <div className="con-product-desc">
        <div className="con-top">
          <div className="product">
            <img src={products.imageUrl} alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
          </div>
          <div className="desc">
            <h3>{products.productName}</h3>
            {/* <p>{products.description.slice(0,80)}...</p> */}
            <div>
              <h5>{products.stockProduct} product ready</h5>
              <div className="d-flex mt-3">
                <span onClick={addCount}>
                  <i className="fas fa-plus-square"/>
                </span>
                <span className="mx-3">{quantity}</span>
                <span onClick={minCount}>
                  <i className="fas fa-minus-square"/>
                </span>
              </div>
            </div>
            <h4>{products.price}</h4>
            <div className="flex-column d-flex prod">
              <button type="button" className="cart" onClick={addCartProduct}>
                <i className="fas fa-cart-plus"/>
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="con-bottom">
          <div className="bottom-title">
            <h3>Product Description</h3>
          </div>
          <div className="bottom-desc">
            <p>{products.description}</p>
          </div>
        </div>
        <Modal images={products.imageUrl} />
      </div>
      {/* ))} */}
    </>
  )
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => ({
  dispatchGetProductByIdAction: (id, onSuccess) => 
    dispatch(getProductById(id, onSuccess)),
  dispatchAddProductToCart: (data) => 
    dispatch(addProductToCart(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

const Modal = ({ images }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <img src={images} alt=""/>
        </div>
      </div>
    </div>
  )
}

// const Data = [
//   {
//     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//     'product_name': 'Nama Product Tampil Disini',
//     'stock': 100,
//     'price': '100.000',
//     'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//   }
// ]