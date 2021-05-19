import { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { getStoreById } from '../../redux/actions/storesActionCreator';
import { deleteProduct } from '../../redux/actions/productsActionCreator';
import ModalAddProduct from './ModalAddProduct.component';
import ProductModalDelete from './ProductModalDelete.component';

const Product = ({ dispatchGetStoreByIdAction, stores, dispatchDeleteProductAction }) => {
  const [storeProduct, setStoreProduct] = useState([]);
  const [selected, setSelected] = useState();

  const history = useHistory();
  const match = useRouteMatch();
  const storeId = match.params.storeId;
  
  const { addToast } = useToasts();

  useEffect(() => {
    if(storeId){
      dispatchGetStoreByIdAction(storeId, (data) => 
      {
        setStoreProduct(data.store.products)
      });
    }
  }, [dispatchGetStoreByIdAction, storeId]);
  
  const showModalDelete = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteProduct').modal('show');
  };

  const handleOnDelete = () => {
    dispatchDeleteProductAction(selected, () => {
      window.$('#modalDeleteProduct').modal('hide');
      addToast('Delete Product Successfully.', {appearance:'warning'});
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, (message) => {
      window.$('#modalDeleteProduct').modal('hide');
      addToast(`Error: ${message}`, {appearance: 'error'});
    });
  };
  
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
          <div
            className="product d-flex flex-column p-0" 
            key={product.id}
            // to={`/store/${stores.id}/product/${product.id}`}
          >
            <img
              onClick={() => history.push(`/store/${stores.id}/product/${product.id}`)}
              src={product.productImageUrl} 
              alt=""
            />
            <div className="text p-2 flex-column d-flex justify-content-between">
              {product.productName.length > 33 ?
              (<h5>{product.productName.slice(0,60)}...</h5>) : 
              (<h5>{product.productName}</h5>)}
              <p>Stock <span>{product.productStock}</span> ready</p>
              <div className="d-flex justify-content-between">
                <h6>{product.productPrice}</h6>
                <span className="pointer" onClick={(e) => showModalDelete(e, product.id)}>
                  <i className="fas fa-trash"/>
                </span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
      <ModalAddProduct StoreId={stores.id} />
      <ProductModalDelete handleOnDelete={handleOnDelete} />
    </>
  )
}

const mapStateToProps = state => ({ stores: state.stores });
const mapDispatchToProps = dispatch => ({
  dispatchGetStoreByIdAction: (storeId, onSuccess) => 
    dispatch(getStoreById(storeId, onSuccess)),
  dispatchDeleteProductAction: (id, onSuccess, onError) => 
    dispatch(deleteProduct(id, onSuccess, onError))
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