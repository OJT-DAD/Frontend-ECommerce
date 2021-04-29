import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <>
      <div className="con-productList d-flex justify-content-between px-2 mt-4 mb-2">
        <div className="input-group input350">
          <label className="input-group-text">Sort</label>
          <select className="form-select" id="inputGroupSelect01">
            <option value="">Choose sort by</option>
            <option value="1">Name</option>
            <option value="2">Price</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="input-group input350">
          <input type="text" className="form-control" placeholder="Search..."/>
          <label className="input-group-text">
            <i className="fas fa-search"/>
          </label>
        </div>
      </div>
      <div className="con-productList row m-0 justify-content-between">
        {Data.map((product, index) => (    
          <Link to={`/product/${product.id}`} className="productList" key={index}>
            <img className="product-image" src={product.image} alt=""/>
            <div className="con-product-text px-2">
              <h5>{product.product_name}</h5>
              <p><span>{product.stock}</span> ready</p>
              <h4>Rp. {product.price}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ProductList;

const Data = [
  {
    'id': 1,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 2,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 3,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 4,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 5,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 6,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 7,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  },
  {
    'id': 7,
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
    'product_name': 'Nama Product Tampil Disini',
    'stock': 50,
    'price': '100.000'
  }
]