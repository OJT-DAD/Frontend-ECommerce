
const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="https://awsimages.detik.net.id/visual/2018/02/14/68cc3767-cbc0-4630-9de4-f97cffa582d1_169.jpeg?w=360&q=90" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2018/12/gGUQ55y4Z1kT4vgyZsZm1KHRbjzl6yfNyIwAhMSj.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2017/12/dewaweb-blog-panduan-lengkap-ecommerce-2018.png" className="d-block w-100" alt="..."/>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  )
}

export default Carousel;
