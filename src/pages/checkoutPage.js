import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/checkout.css';
import Navbar from '../components/navbar/Navbar.component';

const CheckoutPage = () => {
  const history = useHistory();
  const [shipment, setShipment] = useState();

  return (
    <div>
      <Navbar />
          {Data.map((store, index) => (
      <div className="con-checkout">
        <header>
          <h2>Checkout</h2>
        </header>
        <div className="con-detail">
          <table key={index} className="store">
            <thead>
              <tr className="bb">
                <th>{store.store_name}</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {store.lists.map((list) => (
              <tr className="bb" key={list.id}>
                <td>
                  <span className="d-flex">
                      <img src={list.image} alt=""/>
                      <h4 className="m-0 my-auto">{list.product_name}</h4>
                  </span>
                </td>
                <td>Rp. {list.price}</td>
                <td>{list.count}</td>
                <td>Rp. {list.total_price}</td>
              </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>Total Price</td>
                <td className="total">Rp {store.total_price}</td>
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
											{Ship.map((ship)=> (
                        <option value={ship.price}>{ship.name}</option>
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
											<option value="1">BRI</option>
											<option value="2">BCA</option>
											<option value="3">BNI</option>
										</select>
								</th>
								<th></th>
							</tr>
						</thead>
					</table>
				</form>
        <div className="con-purchace mt-3">
          <h4>Total Purchase <span>Rp. 430.000</span></h4>
          <button type="button" onClick={()=>{history.push(`/payment/${store.id}`)}}>Checkout</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default CheckoutPage;

const Ship = [
  {
    'name': 'JNT',
		'price': '10.000'
	},
	{
    'name': 'JNE',
		'price': '20.000'
	},
	{
		'name': 'POS',
		'price': '30.000'
	}
]

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
    'total_price': '400.000'
  }
]