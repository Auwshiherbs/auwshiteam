import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import React, { useState } from 'react';
import './bootstrap.min.css';
import './style.css';
import './animate.css';
import './animate.min.css';
import './CardComponent.css';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';



const CardComponent = () => {
  return (
    <div className="card card-has-bg">
      {<>
  <br />
  <br />
  <br />
  <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-5 mb-3">Products</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <div className="section_our_solution">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="our_solution_category">
          <div className="solution_cards_box">
            <div className="solution_card">
              <div className="hover_color_bubble" />
            
              <div className="solu_title">

              <img src="https://m.media-amazon.com/images/I/7197-TfJ-sL._AC_UF350,350_QL80_.jpg" alt="Image" class="myCardImage"/>  
              <br></br> 
              <br></br>
              {/* <h3>Demo 1</h3> */}
              </div>
              <div className="solu_description">
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p> */}
                <a href="/product">
                <button type="button" className="read_more_btn">
                  Show More
                </button>
                </a>
               
              </div>
            </div>
            <div className="solution_card">
              <div className="hover_color_bubble" />
              
              <div className="solu_title">
              <img src="https://m.media-amazon.com/images/I/7197-TfJ-sL._AC_UF350,350_QL80_.jpg" alt="Image" class="myCardImage"/>  
              <br></br> 
                <br></br>
                {/* <h3>Demo 2</h3> */}
              </div>
              <div className="solu_description">
               
                <a href="/product">
                  <button type="button" className="read_more_btn">
                Show More
                </button>
                </a>
                
              </div>
            </div>
          </div>
          {/*  */}
          <div className="solution_cards_box sol_card_top_3">
            <div className="solution_card">
              <div className="hover_color_bubble" />
              <div className="solu_title">
              <img src="https://m.media-amazon.com/images/I/7197-TfJ-sL._AC_UF350,350_QL80_.jpg" alt="Image" class="myCardImage"/>  
              <br></br> 
                <br></br>
                {/* <h3>Demo 3</h3> */}
              </div>
              <div className="solu_description">
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p> */}
                <a href="/product"><button type="button" className="read_more_btn">
                  Show More
                </button></a>
                
              </div>
            </div>
            <div className="solution_card">
              <div className="hover_color_bubble" />
             
              <div className="solu_title">
              <img src="https://m.media-amazon.com/images/I/7197-TfJ-sL._AC_UF350,350_QL80_.jpg" alt="Image" class="myCardImage"/>  
              <br></br> 
              <br></br>

                {/* <h3>Demo 4</h3> */}
              </div>
              <div className="solu_description">
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p> */}
                <a href="/product">
                <button type="button" className="read_more_btn">
                Show More
                </button>
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
}
      <div className="card-footer">
        {/* Footer content */}
        <div className="media">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

//jathu courousel starts
const CarouselComponent = () => {
  return (
    
<>
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-carousel my-carousel"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div
          className="carousel-item active"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dr9pmcwlx/image/upload/v1685982339/Auwshi_Herbs_1_dorjp4.png")' }}
        ></div>
        <div
          className="carousel-item "
          style={{ backgroundImage: 'url("https://i.imgur.com/w439mEw.jpg")' }}
        ></div>
        <div
          className="carousel-item "
          style={{ backgroundImage: 'url("https://i.imgur.com/cpIrOo1.jpg")' }}
        ></div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon"  />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  
</>



  );
};
//jathu courousel ends

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row  align-items-center same">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="images/products/imageV1.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-5 mb-4">Best Herbal Products And Medicines</h1>
            <p className="mb-4">
            Herbal products and medicines, derived from plants and herbs, are gaining popularity for their natural healing properties. Echinacea, turmeric, ginger, garlic, peppermint, St. John's Wort, chamomile, valerian root, ginseng, and milk thistle are commonly recognized herbal remedies. However, it's important to consult with a healthcare professional before using them, as they can still have side effects and interactions with medications.
            </p>
            {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="container-fluid feature bg-icon my-5 py-6">
      <div className="container">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h1 className="display-5 mb-3">Our Features</h1>
          <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div
          className="card text-white card-has-bg click-col"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/600x900/?tech,street")'
          }}
        >
          <img
            className="card-img d-none"
            src="https://source.unsplash.com/600x900/?tech,street"
            alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
          />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta mb-2">Thought Leadership</small>
              <h4 className="card-title mt-0 ">
                <a className="text-white" herf="#">
                  Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
                </a>
              </h4>
              <small>
                <i className="far fa-clock" /> October 15, 2020
              </small>
            </div>
            <div className="card-footer">
              <div className="media">
                <img
                  className="mr-3 rounded-circle"
                  src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                  alt="Generic placeholder image"
                  style={{ maxWidth: 50 }}
                />
                <div className="media-body">
                  <h6 className="my-0 text-white d-block">Oz Coruhlu</h6>
                  <small>Director of UI/UX</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div
          className="card text-white card-has-bg click-col"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/600x900/?tech,street")'
          }}
        >
          <img
            className="card-img d-none"
            src="https://source.unsplash.com/600x900/?tech,street"
            alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
          />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta mb-2">Thought Leadership</small>
              <h4 className="card-title mt-0 ">
                <a className="text-white" herf="#">
                  Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
                </a>
              </h4>
              <small>
                <i className="far fa-clock" /> October 15, 2020
              </small>
            </div>
            <div className="card-footer">
              <div className="media">
                <img
                  className="mr-3 rounded-circle"
                  src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                  alt="Generic placeholder image"
                  style={{ maxWidth: 50 }}
                />
                <div className="media-body">
                  <h6 className="my-0 text-white d-block">Oz Coruhlu</h6>
                  <small>Director of UI/UX</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div
          className="card text-white card-has-bg click-col"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/600x900/?tech,street")'
          }}
        >
          <img
            className="card-img d-none"
            src="https://source.unsplash.com/600x900/?tech,street"
            alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
          />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta mb-2">Thought Leadership</small>
              <h4 className="card-title mt-0 ">
                <a className="text-white" herf="#">
                  Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
                </a>
              </h4>
              <small>
                <i className="far fa-clock" /> October 15, 2020
              </small>
            </div>
            <div className="card-footer">
              <div className="media">
                <img
                  className="mr-3 rounded-circle"
                  src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                  alt="Generic placeholder image"
                  style={{ maxWidth: 50 }}
                />
                <div className="media-body">
                  <h6 className="my-0 text-white d-block">Oz Coruhlu</h6>
                  <small>Director of UI/UX</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};



const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleScroll(); // Initialize showButton based on initial scroll position
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};





function App() {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <br></br>
      {/* <MyCards></MyCards> */}
      {<About></About>}   
      {<Feature></Feature>}
      {/* {<About02></About02>} */}
      <br></br>
     { <CardComponent></CardComponent>}
     {<BackToTop></BackToTop> }
      
      
      

    </div>
  );
}

export default App;
