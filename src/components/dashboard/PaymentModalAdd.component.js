import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { connect } from 'react-redux';
import { createAdminPayment } from '../../redux/actions/adminPaymentActionCreator';

const PaymentModalAdd = ({dispatchCreateAdminPayment}) => {

  const { addToast } = useToasts();

  const [bankName, setBankName] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {bankName}
    dispatchCreateAdminPayment( data , () => {
      addToast('Create Payment Successfully.', {appearance:'success'});
      setTimeout(()=> {
        window.location.reload();
      }, 1000)
    }, (message) => {
      addToast(`Error: ${message}`, {appearance:'error'});
    });
  };

  return (
    <div className="modal fade" id="modalAddPayment" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4">
            <form onSubmit={handleOnSubmit}>
              <div className="d-flex mb-3 mt-3">
                <label>First Name</label>
                <input
                  required
                  type="text" 
                  placeholder="Bank Name"
                  onChange={(e) => setBankName(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="float-end mt-3">
                <button className="cancle px-2 mr-2" data-bs-dismiss="modal">Cancle</button>
                <button type="submit" className="add px-2">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchCreateAdminPayment: (data, onSuccess, onError) =>
    dispatch(createAdminPayment(data, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(PaymentModalAdd);