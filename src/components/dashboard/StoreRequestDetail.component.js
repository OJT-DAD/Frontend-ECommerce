import { useHistory } from 'react-router-dom';

const StoreRequestDetail = () => {
  const history = useHistory();

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Store Request Detail</h4>
      </header>
      <div className="con-right p-4">
        zxczxczxczxc
      </div>
    </div>
  )
}

export default StoreRequestDetail;
