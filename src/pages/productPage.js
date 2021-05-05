import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getProductById } from '../redux/actions/productsActionCreator';
import Navbar from '../components/navbar/Navbar.component';

const ProductPage = ({ dispatchGetProductByIdAction }) => {
  const [products, setProducts] = useState({});

  let params = useParams();
  
  useEffect(() => {
    dispatchGetProductByIdAction(params.productId, (data) =>
    {
      setProducts(data.product)
    });
  }, [dispatchGetProductByIdAction, params.productId]);
  
  console.log('hhh', products)
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
            <h5>{products.stockProduct} product ready</h5>
            <h4>{products.price}</h4>
            <div className="flex-column d-flex prod">
              <button type="button" className="cart">
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

const mapDispatchToProps = dispatch => ({
  dispatchGetProductByIdAction: (id, onSuccess) => 
    dispatch(getProductById(id, onSuccess))
});
export default connect(null, mapDispatchToProps)(ProductPage);

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