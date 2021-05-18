import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PaymentModalDelete from './PaymentModalDelete.component';
import PaymentModalAdd from './PaymentModalAdd.component';

const Payment = () => {
  const [edit, setEdit] = useState({ delete: false });
  const [selected, setSelected] = useState();

  const history = useHistory();

  const handleBack = () => {
    history.replace('/dashboard')
  };

  const handleEdit = () => {
    setEdit({  ...edit, delete: !edit.delete })
  };

  const showModalAddPayment = () => {
    window.$('#modalAddPayment').modal('show')
  };

  const showModalDeletePayment = (event, id) => {
    event.preventDefault();
    setSelected(id);
    window.$('#modalDeletePayment').modal('show');
  };

  const handleOnDelete = () => {};

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Payment</h4>
        <button onClick={handleEdit} className="delete px-2 py-1 my-auto">Delete</button>
      </header>
      <div className="con-right" style={{backgroundColor:'transparent'}}>
        <div className="row">
          {BankList.map((bank) => (
          <div className="con-bank" key={bank.id}>
            <i className="fas fa-university"/>
            <h4>{bank.bankName}</h4>
            {edit.delete && 
            (<span onClick={(e) => showModalDeletePayment(e, bank.id)} style={{cursor:'pointer'}}>
              <i className="fas fa-trash"/>
            </span>)
            }
          </div>
          ))}
          <div className="con-bank" style={{backgroundColor:'#F1F1F1'}} onClick={showModalAddPayment}>
            <i className="fas fa-plus"/>
          </div>
        </div>
      </div>
      <PaymentModalDelete handleOnDelete={handleOnDelete}/>
      <PaymentModalAdd />
    </div>
  )
}

export default Payment;


const BankList = [
  {
    'id': 1,
    'bankName': 'BRI'
  },
  {
    'id': 2,
    'bankName': 'BNI'
  },
  {
    'id': 3,
    'bankName': 'BCA'
  },
  {
    'id': 4,
    'bankName': 'MANDIRI'
  },
]