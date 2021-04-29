import { useHistory } from 'react-router-dom';

const History = () => {
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
        <h4>History Management</h4>
      </header>
    </div>
  )
}

export default History;
