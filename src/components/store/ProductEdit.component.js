import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/actions/productsActionCreator';
import { useParams } from 'react-router-dom';


const ProductEdit = ({ dispatchGetProductByIdAction }) => {
  const [data, setData] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');

  let { productId } = useParams();

  useEffect(() => {
    dispatchGetProductByIdAction(productId, (data) => {
      setData(data.product);
      setProductName(data.product.productName);
      setPrice(data.product.price);
      setStock(data.product.stockProduct);
      setDescription(data.product.description);
    })
  }, [dispatchGetProductByIdAction, productId])

  console.log('okey', data);
  
  const handleOnSubmit = () => {};
  
  return (
    <div className="con-sto storeProductEdit mt-3 p-3">
      <form onSubmit={handleOnSubmit}>
        <div className="d-flex">
          <label>Product Name</label>
          <input value={productName} className="form-control" />
        </div>
        <div className="d-flex mt-2">
          <label>Price</label>
          <input value={price} className="form-control" />
        </div>
        <div className="d-flex mt-2">
          <label>Stock</label>
          <input value={stock} className="form-control" />
        </div>
        <div className="d-flex my-2">
          <label>Image</label>
          <input type="file" className="form-control" />
        </div>
        <img alt=""/>
        <div className="d-flex mt-2">
          <label>Description</label>
          <textarea value={description} className="form-control" />
        </div>
        <div className="d-flex float-end mt-3">
          <button className="back px-3 py-1">Cancle</button>
          <button className="save px-3 py-1 ml-3" type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchGetProductByIdAction: (id, onSuccess) => 
    dispatch(getProductById(id, onSuccess))
});
export default connect(null, mapDispatchToProps)(ProductEdit);
