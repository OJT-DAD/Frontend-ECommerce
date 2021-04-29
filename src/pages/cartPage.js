import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/cart.css'

const CartPage = () => {
  const history = useHistory();
  const [select, setSelect] = useState();

  const checkout = () => {
    if(select){
      history.replace(`/checkout/${select}`);
    }
  };

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
            {Data.map((store, index) => (
            <tbody key={index}>
              <tr className="store_name">
                <td className="store_name">
                  <div className="form-check d-flex">
                    <input className="form-check-input" type="radio" onChange={(e)=>setSelect(e.target.value)} name="flexRadioDefault" value={store.id}/>
                    <h3 className="my-auto">{store.store_name}</h3>
                  </div>
                </td>
                <td></td>
                <td className="del"></td>
                <td></td>
                <td></td>
              </tr>
              {store.lists.map((product, index) => (
              <tr key={index} className="listProduct">
                <td>
                  <span className="d-flex">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt=""/>
                    </Link>
                    <Link to={`/product/${product.id}`} style={{textDecoration:'none', display:'flex'}}>
                      <h4 className="m-0 my-auto">{product.product_name}</h4>
                    </Link>
                  </span>
                </td>
                <td>
                  <span className="full">
                    <i className="fas fa-minus-square" />
                    <p>{product.count}</p>
                    <i className="fas fa-plus-square"/>
                  </span>
                </td>
                <td className="del">
                  <i className="fas fa-trash"/>
                </td>
                <td>Rp. {product.price}</td>
                <td>Rp. {product.total_price}</td>
              </tr>
              ))}
            </tbody>
            ))}
          </table>
          <div className="select-product mt-2">
            <div>
              <h3>Continue Transaction</h3>
            </div>
            <button type="button" onClick={checkout} className="px-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
  )
}

export default CartPage;

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
      },
    ]
  },
  {
    'id': 2,
    'store_name': 'QB',
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
      },
    ]
  },
]