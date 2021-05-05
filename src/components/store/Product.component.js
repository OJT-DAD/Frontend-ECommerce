import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getStoreById } from '../../redux/actions/storesActionCreator';
import ModalAddProduct from './ModalAddProduct.component';

const Product = ({ dispatchGetStoreByIdAction, stores }) => {
  const [storeProduct, setStoreProduct] = useState([]);

  const match = useRouteMatch();
  const storeId = match.params.storeId;
  
  useEffect(() => {
    if(storeId){
      dispatchGetStoreByIdAction(storeId, (data) => 
      {
        setStoreProduct(data.store.products)
      });
    }
  }, [dispatchGetStoreByIdAction, storeId]);
  
  // console.log('sasasasa', storeProduct)
  
  return (
    <>
      <div>
        <div className="con-sto mt-3">
          <header className="d-flex justify-content-between align-items-center">
            <h4>
              {stores.name} Product
            </h4>
            <button className="px-2" data-bs-toggle="modal" data-bs-target="#modalAddProduct">
              <i className="fas fa-plus mr-1"/>
              Product
            </button>
          </header>
        </div>
        <div className="con-sto-product row p-0 m-0">
          {storeProduct.map((product) => (
          <Link 
            className="product d-flex flex-column p-0" 
            key={product.id}
            to={`/store/${stores.id}/product/${product.id}`}
          >
            <img src={product.productImageUrl} alt=""/>
            <div className="text p-2 flex-column d-flex justify-content-between">
              {product.productName.length > 33 ?
              (<h5>{product.productName.slice(0,60)}...</h5>) : 
              (<h5>{product.productName}</h5>)}
              <p>Stock <span>{product.productStock}</span> ready</p>
              <div className="d-flex justify-content-between">
                <h6>{product.productPrice}</h6>
                <span className="pointer">
                  <i className="fas fa-trash"/>
                </span>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
      <ModalAddProduct StoreId={stores.id} />
    </>
  )
}

const mapStateToProps = state => ({ stores: state.stores });
const mapDispatchToProps = dispatch => ({
  dispatchGetStoreByIdAction: (storeId, onSuccess) => 
    dispatch(getStoreById(storeId, onSuccess))
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);

// const Data = [
//   {
//     'id': 1,
//     'store_name': 'QB Store',
//     'product': [
//       {
//         'id': 1,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'stock': 100,
//         'price': '100.000',
//         'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//       },
//       {
//         'id': 2,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini Nama Product Tampil Disini Nama Product Tampil Disini',
//         'stock': 100,
//         'price': '100.000',
//         'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//       },
//       {
//         'id': 3,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini Nama Product Tampil Disini Nama Product Tampil Disini',
//         'stock': 100,
//         'price': '100.000',
//         'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//       },
//       {
//         'id': 4,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'stock': 100,
//         'price': '100.000',
//         'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//       },
//       {
//         'id': 5,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'stock': 100,
//         'price': '100.000',
//         'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
//       },
//     ]
//   }
// ]