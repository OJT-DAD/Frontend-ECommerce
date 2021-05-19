import { useHistory } from 'react-router-dom';

const History = () => {
  const history = useHistory();
  const handleBack = () => {
    history.replace("/dashboard")
  };

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>History Management</h4>
      </header>
      <div className="con-right">
        <table className="history">
          <thead>
            <tr>
              <th>Store</th>
              <th>User</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Data.storeName}</td>
              <td>{Data.userData.fullName}</td>
              <td>{Data.dateTransactionFinish}</td>
              <td>{Data.totalTransactionPrice}</td>
              <td>{Data.statusTransaction === 1 && 
                (<button>Success</button>)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History;

const Data = {
  'storeName': 'Rafi Store',
  'userData': {
    'fullName': 'Ardi Hanafi'
  },
  'dateTransactionFinish': '09-11-2021',
  'totalTransactionPrice': 'Rp. 100.000,00',
  'statusTransaction': 1
}