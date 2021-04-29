import { Link, useHistory } from 'react-router-dom';

const Store = () => {
  const history = useHistory();
  const handleBack = () => {
    history.replace("/dashboard")
  };

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Store Management</h4>
        <button className="add my-auto px-2 py-1">
          <i className="fas fa-plus mr-2"/>
          Store
        </button>
      </header>
      <div className="con-right">
        <table className="store mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Contact</th>
              <th className="detail">Detail</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((store) => (
            <tr key={store.id}>
              <td>{store.store_name}</td>
              {/* <td>{store.description.slice(0,25)}</td> */}
              <td>
                {store.description.length >= 25 ? 
                `${store.description.slice(0,25)}...` : 
                `${store.description}`}
              </td>
              <td>
                {store.address.length >= 25 ? 
                `${store.address.slice(0,25)}...` : 
                `${store.address}`}
              </td>
              <td>{store.contact}</td>
              <td>
                <Link className="Link">
                  Detail
                </Link>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Store;

const Data = [
  {
    'id': 1,
    'store_name': 'QB Store',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
    'contact': '0-21-740-0122'
  },
  {
    'id': 2,
    'store_name': 'QB Store',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
    'contact': '0-21-740-0122'
  },
  {
    'id': 3,
    'store_name': 'QB Store',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
    'address': 'Jl Pamulang Permai I B-XI/1, Dki Jakarta',
    'contact': '0-21-740-0122'
  },
]