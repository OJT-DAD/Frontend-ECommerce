import Navbar from '../components/navbar/Navbar.component';
import '../styles/transaction.css';
import TransactionData from '../components/transaction/transactionData.component';

const TransactionPage = () => {
  return (
    <div>
      <Navbar />
      <div className="con-transac">
        <header>
          <h2>Transaction</h2>
        </header>
        {Data.map((trans) => (
          <div className="con-trans">
            <TransactionData trans={trans} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionPage;


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
    'address': 'Jl Pasar Baru Brt V/92 RT 013/003, Dki Jakarta',
    'message': 'Please send my product',
    'shipment': {
      'id': 1,
      'name': 'JNT',
      'price': '30.000'
    },
    'payment': {
      'name': 'BRI',
      'account': '563101017240538'
    },
    'total_price': '400.000',
    'total_purchase': '430.000',
    'status': 2
  }
]