import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getCartByUserId, deleteCartProduct, updateCartProduct } from '../redux/actions/cartActionCreator';
import Navbar from '../components/navbar/Navbar.component';
import ModalDeleteProductCart from '../components/cart/ModalDelete.component';
import CartNull from '../components/cart/CartNull.component';
import '../styles/cart.css'

const CartPage = ({ 
  auth, carts, 
  dispatchGetCartByUserIdAction, 
  dispatchDeleteCartProduct, 
  dispatchUpdateCartProductAction
}) => {
  const history = useHistory();
  const [select, setSelect] = useState();
  const [selected, setSelected] = useState('');

  const { addToast } = useToasts();

  const id = auth.userId;

  useEffect(() => dispatchGetCartByUserIdAction(id), [dispatchGetCartByUserIdAction, id])

  const checkout = () => {
    if(select){
      history.push(`/checkout/${select}`);
    }
    else{
      addToast('Please select store for checkout!', {appearance:'warning'});
    }
  };

  // SET QUANTITY FUNCTION
  const addQuantity = (event, cartId, count) => {
    event.preventDefault();
    const quantity = count + 1;
    dispatchUpdateCartProductAction({cartId, quantity}, 
    () => dispatchGetCartByUserIdAction(id),
    (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };
  const minQuantity = (event, cartId, count) => {
    event.preventDefault();
    const quantity = count - 1;
    if(count <= 1) {
      return null
    }
    dispatchUpdateCartProductAction({cartId, quantity}, 
    () => dispatchGetCartByUserIdAction(id),
    (message) => addToast(`Error: ${message}`, {appearance:'error'}));
  };

  const showDeleteModal = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeleteProductCart').modal('show');
  };

  const handleOnDelete = () => {
    dispatchDeleteCartProduct(selected, () => {
      window.$('#modalDeleteProductCart').modal('hide');
      addToast('Delete Product Successfully.', {appearance:'warning'});
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }, (message) => {
      window.$('#modalDeleteProductCart').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };
  

  // console.log('hehe', select);
  return (
    <div>
        <Navbar />
        <div className="con-cart">
          <table>
            <thead>
              <tr>
                <th className="title">Cart</th>
                <th>Count</th>
                <th className="del">Delete</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            
            {carts.map((cart) => (
            <tbody key={cart.id}>
              <tr className="store_name">
                <td className="store_name">
                  <div className="form-check d-flex">
                    <input className="form-check-input" type="radio" onChange={(e)=>setSelect(e.target.value)} name="flexRadioDefault" value={cart.id}/>
                    <h3 className="my-auto">{cart.storeName}</h3>
                  </div>
                </td>
                <td></td>
                <td className="del"></td>
                <td></td>
                <td></td>
              </tr>
              {cart.lists.map((product) => (
              <tr key={product.productId} className="listProduct">
                <td>
                  <span className="d-flex">
                    <Link to={`/product/${product.productId}`}>
                      <img src={product.imageUrl} alt=""/>
                    </Link>
                    <Link to={`/product/${product.productId}`} style={{textDecoration:'none', display:'flex'}}>
                      <h4 className="m-0 my-auto">{product.productName}</h4>
                    </Link>
                  </span>
                </td>
                <td>
                  <span className="full">
                    <span onClick={(e) => minQuantity(e, product.listId, product.quantity)}>
                      <i className="fas fa-minus-square" />
                    </span>
                    <p>{product.quantity}</p>
                    <span onClick={(e) => addQuantity(e, product.listId, product.quantity)}>
                      <i className="fas fa-plus-square"/>
                    </span>
                  </span>
                </td>
                <td className="del">
                  <span onClick={(e) => showDeleteModal(e, product.listId)}>
                    <i className="fas fa-trash"/>
                  </span>
                </td>
                <td>{product.productPrice}</td>
                <td>{product.totalPrice}</td>
              </tr>
              ))}
            </tbody>
            ))}
          </table>
          {carts.length === 0 ?
          (<CartNull/>) : 
          (<div className="select-product mt-2">
            <div>
              <h3>Continue Transaction</h3>
            </div>
            <button type="button" onClick={checkout} className="px-3">
              Checkout
            </button>
          </div>)
          }
        </div>
        <ModalDeleteProductCart handleOnDelete={handleOnDelete} />
      </div>
  )
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  carts: state.carts 
});
const mapDispatchToProps = dispatch => ({
  dispatchGetCartByUserIdAction: (id, onSuccess) => 
    dispatch(getCartByUserId(id, onSuccess)),
  dispatchDeleteCartProduct: (id, onSuccess, onError) => 
    dispatch(deleteCartProduct(id, onSuccess, onError)),
  dispatchUpdateCartProductAction: (id, data, onSuccess, onError) => 
    dispatch(updateCartProduct(id, data, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

// const Data = [
//   {
//     'id': 1,
//     'store_name': 'QB Store',
//     'lists': [
//       {
//         'id': 1,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'count': 2,
//         'price': '100.000',
//         'total_price': '200.000'
//       },
//       {
//         'id': 2,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'count': 2,
//         'price': '100.000',
//         'total_price': '200.000'
//       },
//     ]
//   },
//   {
//     'id': 2,
//     'store_name': 'QB',
//     'lists': [
//       {
//         'id': 1,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'count': 2,
//         'price': '100.000',
//         'total_price': '200.000'
//       },
//       {
//         'id': 2,
//         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
//         'product_name': 'Nama Product Tampil Disini',
//         'count': 2,
//         'price': '100.000',
//         'total_price': '200.000'
//       },
//     ]
//   },
// ]