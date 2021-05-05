import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar.component';
import Carousel from '../components/home/Carousel.component';
import ProductList from '../components/home/ProductList.component';
import '../styles/home.css';
import { fetchAllProduct } from '../redux/actions/productsActionCreator';

const HomePage = ({ products, dispatchFetchAllProductsAction }) => {
  useEffect(() => dispatchFetchAllProductsAction(), [dispatchFetchAllProductsAction])

  return(
    <div>
      <Navbar />
      <div className="con-home">
        <Carousel />
        <ProductList />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
});
const mapDispatchToProps = dispatch => ({
  dispatchFetchAllProductsAction: () => dispatch(fetchAllProduct())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
  