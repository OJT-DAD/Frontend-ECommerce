import React from 'react'

const InfoModalDelete = ({ handleOnDelete, text, id }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4">
            <h4>{text}</h4>
            <div className="float-end mt-3">
              <button className="cancle px-2 mr-2" type="button" data-bs-dismiss="modal">Cancle</button>
              <button className="delete px-2" type="button" onClick={handleOnDelete} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModalDelete;