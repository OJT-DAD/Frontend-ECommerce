import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { deleteAdminPayment, fetchAllAdminPayment } from '../../redux/actions/adminPaymentActionCreator';
import PaymentModalDelete from './PaymentModalDelete.component';
import PaymentModalAdd from './PaymentModalAdd.component';

const Payment = ({
    dispatchFetchAllAdminPaymentAction, 
    dispatchDeleteAdminPayment,
    adminPayments
  }) => {

  const [edit, setEdit] = useState({ delete: false });
  const [selected, setSelected] = useState();
  const { addToast } = useToasts();

  const history = useHistory();

  const handleBack = () => {
    history.replace('/dashboard')
  };

  //redux load data
  useEffect(() => {
    dispatchFetchAllAdminPaymentAction()
  }, [dispatchFetchAllAdminPaymentAction]);

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

  const handleOnDelete = () => {
    dispatchDeleteAdminPayment(selected, () => {
      window.$('#modalDeleteStore').modal('hide');
      addToast('Delete Store Successfully.', {appearance:'warning'});
    }, (message) => {
      window.$('#modalDeleteStore').modal('hide');
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

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
          {adminPayments.map((bank) => (
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
const mapStateToProps = state => ({ 
  adminPayments : state.adminPayments
});
const mapDispatchToProps = dispatch => ({
  dispatchFetchAllAdminPaymentAction: () => dispatch(fetchAllAdminPayment()),
  dispatchDeleteAdminPayment: (id, onSuccess, onError) => 
    dispatch(deleteAdminPayment(id, onSuccess, onError))
});
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
