import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/personal.css';

const PersonalPage = ({ auth }) => {
  const history = useHistory();
  
  const [userid, setUserid] = useState(auth.userId)
  const [store, setStore] = useState({ request: true });
  
  const handleStore = () => {
    setStore({  ...store, request: !store.request })
  };
  const handleManageStore = () => {
    history.push(`/store/${auth.storeId}`)
  }

  return (
    <div>
      <Navbar />
      <div className="con-personal">
        <header>
          <h2>{auth.fullName}</h2>
        </header>
        {/* <div className="con-person">
          For Personal User
        </div> */}
        <div className="con-person">
        {auth.role === "Seller" ? 
          (<div>
            <h4>For manage your Store click 
            <button className="manage py-1 px-2" onClick={handleManageStore}>Manage Store</button></h4>
          </div>) :
          (<div>
            {store.request &&
            (<h5>Not have store? 
            <button className="py-1 px-2" onClick={handleStore}>Register Store</button></h5>)}

            {!store.request &&
            (<form>
              <input onChange={(e) => setUserid(e.target.value)} value={userid} style={{display:'none'}}/>
              <div className="d-flex mb-3">
                  <label>Store Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Store Name"
                    className="form-control"
                  />
                </div>
                <div className="d-flex mb-3">
                  <label>Card Number</label>
                  <input
                    required
                    type="text" 
                    placeholder="Card Number"
                    className="form-control"
                  />
                </div>
                <div className="d-flex mb-3">
                  <label>NPWP</label>
                  <input
                    required
                    type="text" 
                    placeholder="NPWP"
                    className="form-control"
                  />
                </div>
                <div className="d-flex mb-3">
                  <label>Address</label>
                  <input
                    required
                    type="text" 
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="d-flex mb-3">
                  <label>Contact</label>
                  <input
                    required
                    type="text" 
                    placeholder="Contact"
                    className="form-control"
                  />
                </div>
                <div className="d-flex mb-3">
                  <label>Description</label>
                  <textarea
                    required
                    type="text" 
                    placeholder="Description"
                    className="form-control"
                  />
                </div>
                <div className="d-flex flex-row-reverse mt-4">
                  <button className="register px-2 py-1" type="submit">Register</button>
                </div>
              </form>)}
          </div>)
        }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(PersonalPage);