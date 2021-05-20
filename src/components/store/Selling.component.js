import { Link, useRouteMatch } from 'react-router-dom';

const Selling = () => {
  const { url } = useRouteMatch();
  

  return (
    <div className="con-sto mt-3 p-0">
      <table className="selling">
        <thead>
          <tr>
            <th>Username</th>
            <th>Address</th>
            <th>Total Price</th>
            <th>Payment</th>
            <th>Shipment</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((sell) => (
          <tr key={sell.transactionIndexId}>
            <td>{sell.username}</td>
            {sell.shippingAddress.length > 30 ? 
              (<td>{sell.shippingAddress.slice(0, 30)}...</td>):
              (<td>{sell.shippingAddress}
            </td>)}
            <td>{sell.totalTransactionPrice}</td>
            <td>{sell.paymentMethod.bankName}</td>
            <td>{sell.shippingMethod.shippingName}</td>
            <td>
              <Link className="Link" to={`${url}/${sell.transactionIndexId}`}>
                Detail
              </Link>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Selling;

const Data = [
  {
    "transactionIndexId": 1,
    'username': 'Ardi Hanafi',
    "totalTransactionPrice": "Rp. 220.000,00",
    "shippingAddress": "Cakung, Jakarta Timur",
    "shippingMethod": {
      "shippingMethodId": 0,
      "shippingName": "JNE",
      "shippingCost": "string"
    },
    "paymentMethod": {
      "paymentMethodId": 0,
      "bankName": "BNI",
      "bankAccountNumber": "string"
    }
  },
  {
    "transactionIndexId": 2,
    'username': 'Ardi Hanafi',
    "totalTransactionPrice": "Rp. 220.000,00",
    "shippingAddress": "Cakung, Jakarta Timur",
    "shippingMethod": {
      "shippingMethodId": 0,
      "shippingName": "JNE",
      "shippingCost": "string"
    },
    "paymentMethod": {
      "paymentMethodId": 0,
      "bankName": "BNI",
      "bankAccountNumber": "string"
    }
  },
  {
    "transactionIndexId": 3,
    'username': 'Ardi Hanafi',
    "totalTransactionPrice": "Rp. 220.000,00",
    "shippingAddress": "Cakung, Jakarta Timur",
    "shippingMethod": {
      "shippingMethodId": 0,
      "shippingName": "JNE",
      "shippingCost": "string"
    },
    "paymentMethod": {
      "paymentMethodId": 0,
      "bankName": "BNI",
      "bankAccountNumber": "string"
    }
  },
]


