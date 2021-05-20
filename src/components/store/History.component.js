import React from 'react'

const History = () => {
  return (
    <div className="con-sto mt-3 p-0">
      <table className="store-history">
        <thead>
          <tr>
            <th>User</th>
            <th>Address</th>
            <th>Total Price</th>
            <th>Payment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((history) => (
          <tr>
            <td>{history.userData.fullName}</td>
            <td>{history.shippingAddress}</td>
            <td>{history.totalTransactionPrice}</td>
            <td>{history.paymentMethod}</td>
            <td>{history.dateTransactionFinish}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default History;

const Data = [
  {
    'id': 1,
    'userData': {
      'fullName': 'Ardi Hanafi'
    },
    'shippingAddress': 'Cakung, Jakarta Timur',
    'totalTransactionPrice': 'Rp. 300.000',
    'paymentMethod': 'BNI',
    'dateTransactionFinish': '19-05-2021'
  },
  {
    'id': 2,
    'userData': {
      'fullName': 'Ardi Hanafi'
    },
    'shippingAddress': 'Cakung, Jakarta Timur',
    'totalTransactionPrice': 'Rp. 300.000',
    'paymentMethod': 'BNI',
    'dateTransactionFinish': '19-05-2021'
  },
  {
    'id': 3,
    'userData': {
      'fullName': 'Ardi Hanafi'
    },
    'shippingAddress': 'Cakung, Jakarta Timur',
    'totalTransactionPrice': 'Rp. 300.000',
    'paymentMethod': 'BNI',
    'dateTransactionFinish': '19-05-2021'
  },
] 