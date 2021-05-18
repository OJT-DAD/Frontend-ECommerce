import React from 'react'

const PaymentModalAdd = () => {

  const handleOnSubmit = () => {};

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
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)} 
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

export default PaymentModalAdd
