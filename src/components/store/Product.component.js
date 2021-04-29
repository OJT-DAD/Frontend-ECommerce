
const Product = () => {

  return (
    <>
      {Data.map((store) => (
      <div key={store.id}>
        <div className="con-sto mt-3">
          <header className="d-flex justify-content-between align-items-center">
            <h4>{store.store_name} Product</h4>
            <button className="px-2">+ Product</button>
          </header>
        </div>
        <div className="con-sto-product row p-0 m-0">
          {store.product.map((prod) => (
          <div className="product d-flex flex-column p-0" key={prod.id}>
            <img src={prod.image} alt=""/>
            <div className="text p-2 flex-column d-flex justify-content-between">
              {prod.product_name.length > 33 ?
              (<h5>{prod.product_name.slice(0,60)}...</h5>) : 
              (<h5>{prod.product_name}</h5>)}
              <p>Stock <span>{prod.stock}</span> ready</p>
              <div className="d-flex justify-content-between">
                <h6>Rp. {prod.price}</h6>
                <div>
                  <span className="pointer">
                    <i className="fas fa-trash"/>
                  </span>
                  <span className="ml-2 pointer">
                    <i className="fas fa-edit"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
      ))}
    </>
  )
}

export default Product;

const Data = [
  {
    'id': 1,
    'store_name': 'QB Store',
    'product': [
      {
        'id': 1,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini',
        'stock': 100,
        'price': '100.000',
        'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
      },
      {
        'id': 2,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini Nama Product Tampil Disini Nama Product Tampil Disini',
        'stock': 100,
        'price': '100.000',
        'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
      },
      {
        'id': 3,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini Nama Product Tampil Disini Nama Product Tampil Disini',
        'stock': 100,
        'price': '100.000',
        'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
      },
      {
        'id': 4,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini',
        'stock': 100,
        'price': '100.000',
        'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
      },
      {
        'id': 5,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvm6lUd8HMydmD9vT4aWoVkJZ8irqM3ZTWA&usqp=CAU',
        'product_name': 'Nama Product Tampil Disini',
        'stock': 100,
        'price': '100.000',
        'description': 'Spesifikasi Teknis\r\nHeadphone:\r\nBerat: 278 g\r\nDriver: PRO-G 40 mm\r\nRespons frekuensi: 20 Hz-20 KHz\r\nImpedansi: 39 Ohm (pasif), 5k Ohm (aktif)\r\nSensitivitas: 87,5 dB SPL/m'
      },
    ]
  }
]