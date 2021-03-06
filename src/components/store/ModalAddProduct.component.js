import { useState } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { createProduct } from '../../redux/actions/productsActionCreator';
import defaultImageSrc from '../../images/Loading.png';

const ModalAddProduct = ({ StoreId, dispatchCreateProductAction }) => {
  const { addToast } = useToasts();

  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [StockProduct, setStockProduct] = useState('');
  const [ImageUrl, setImageUrl] = useState(null);
  const [Description, setDescription] = useState('');
  const [ImageSrc, setImageSrc] = useState(defaultImageSrc);

  const handleOnSubmit = event => {
    event.preventDefault();
    let formData = new FormData()
    formData.append("StoreId", StoreId);
    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("StockProduct", StockProduct);
    formData.append("ImageUrl", ImageUrl);
    formData.append("Description", Description);
    
    dispatchCreateProductAction(formData, () => {
      addToast('Create Product Successfully', {appearance:'success'})
      window.$('#modalAddProduct').modal('hide');
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }, (message) => addToast(`Error ${message}`, {appearance:'error'}))
  };

  const handleChangeImage = e => {
    let imageFile = e.target.files[0];
    setImageUrl(imageFile);
    const reader = new FileReader();
    reader.onload = x => {
      setImageSrc(x.target.result)
    }
    reader.readAsDataURL(imageFile)
  }



  return (
    <div className="modal fade" id="modalAddProduct" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4">
            <form onSubmit={handleOnSubmit}>
              <div className="d-flex mb-3">
                <label>Product Name</label>
                <input
                  required
                  type="text" 
                  placeholder="Product Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Price</label>
                <input
                  required
                  type="text" 
                  placeholder="Price"
                  value={Price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Stock</label>
                <input
                  required
                  type="text" 
                  placeholder="Stock"
                  value={StockProduct}
                  onChange={(e) => setStockProduct(parseInt(e.target.value))} 
                  className="form-control"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Image</label>
                <input
                  required
                  type="file" 
                  accept="image/*"
                  placeholder="Image"
                  onChange={handleChangeImage} 
                  className="form-control"
                />
              </div>
              <img src={ImageSrc} className="imageView" alt="imageView"/>
              <div className="d-flex mb-3">
                <label>Description</label>
                <textarea
                  required
                  type="text" 
                  placeholder="Description"
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)} 
                  className="form-control"
                />
              </div>
              <div className="float-end mt-3">
                <button className="cancle px-2 mr-2" type="button" data-bs-dismiss="modal">Cancle</button>
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
  dispatchCreateProductAction: (data, onSuccess, onError) =>
    dispatch(createProduct(data, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(ModalAddProduct);
