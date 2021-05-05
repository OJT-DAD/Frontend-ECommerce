import { Switch, Route, Redirect, Link, useRouteMatch, useHistory, useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.component';
import '../styles/store.css';
import Product from '../components/store/Product.component';
import ProductEdit from '../components/store/ProductEdit.component';
import Information from '../components/store/Information.component';
import Selling from '../components/store/Selling.component';

const StorePage = () => {
  const history = useHistory()
  const { path, url, params } = useRouteMatch();
  const fullUrl = history.location.pathname;
  let { productId } = useParams();

  // console.log('aaddaad',productId)
  
  return (
    <>
      <Navbar />
      <div className="con-store">
        <nav>
          <div className="header-item">
            <h4>Store</h4>
          </div>
          <div className="header-item">
            <Link to={`${url}/product`} style={{textDecoration:'none'}} className="Link">
              <h6
                className={(fullUrl === `/store/${params.storeId}/product` || 
                fullUrl === `/store/${params.storeId}/product/${productId}`) ?
                "active" : ""}>
              Product</h6>
            </Link>
            <Link to={`${url}/information`} style={{textDecoration:'none'}} className="Link">
              <h6
                className={fullUrl === `/store/${params.storeId}/information` ? "active" : ""}>
              Information</h6>
            </Link>
            <Link to={`${url}/selling`} style={{textDecoration:'none'}} className="Link">
              <h6
                className={fullUrl === `/store/${params.storeId}/selling` ? "active" : ""}>
              Selling</h6>
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path={`${path}/product`}>
            <Product />
          </Route>
          <Route exact path={`${path}/product/:productId`} component={ProductEdit}/>
          <Route exact path={`${path}/information`}>
            <Information />
          </Route>
          <Route exact path={`${path}/selling`}>
            <Selling />
          </Route>
          <Redirect to={`${path}/product`}/>
        </Switch>
      </div>
    </>
  )
}

export default StorePage;