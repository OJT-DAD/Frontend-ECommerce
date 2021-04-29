import { Link, useHistory } from 'react-router-dom';

const Product = () => {
  const history = useHistory();
  const handleBack = () => {
    history.replace("/dashboard")
  };

  return(
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Product Management</h4>
        <button className="add my-auto px-2 py-1">
          <i className="fas fa-plus mr-2"/>
          Product
        </button>
      </header>
      <div className="con-right">
        <table className="product mb-5">
          <thead>
            <tr>
              <th>Image</th>
              <th className="name">Name</th>
              <th className="price">Price</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt=""/>
              </td>
              <td className="name">{product.product_name}</td>
              <td>Rp. {product.price}</td>
              <td>
                <Link 
                  to={`/dashboard/product/${product.id}`}
                  className="Link"
                >Detail</Link>
              </td>
              <td>
                <button className="px-2">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Product;

const Data = [
  {
    'id': 1,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 2,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 3,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 4,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 5,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 6,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 7,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  },
  {
    'id': 8,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tanpil Disini',
    'price': '100.000'
  }
]