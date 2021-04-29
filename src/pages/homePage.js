import Navbar from '../components/navbar/Navbar.component';
import Carousel from '../components/home/Carousel.component';
import ProductList from '../components/home/ProductList.component';
import '../styles/home.css';

const HomePage = () => {
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
  
export default HomePage;
  