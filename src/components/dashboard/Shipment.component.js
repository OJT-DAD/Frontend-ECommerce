import { useHistory } from 'react-router-dom';

const Shipment = () => {
  const history = useHistory();

  const handleBack = () => {
    history.replace('/dashboard')
  };

  return (
    <div className="con-dashboard-right">
      <header className="px-3">
        <button className="back my-auto px-2 py-1" onClick={handleBack}>
          <i className="fas fa-arrow-left mr-2"/>
          Back
        </button>
        <h4>Shipment</h4>
      </header>
      <div className="con-right">Shipment</div>
    </div>
  )
}

export default Shipment;
