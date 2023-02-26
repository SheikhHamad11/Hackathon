import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import Image from '../../Assets/home4.jpg'
import Image1 from '../../Assets/home7.jpg'
import Image2 from '../../Assets/home2.jpg'
import Image3 from '../../Assets/home5.png'
export default function Home() {
  return (
    <>
    
      <div >
        <Carousel fade interval={2000} >
          <Carousel.Item>
            <div className="img1">
              <img
                className="d-block w-100 h-100"
                src={Image}
                alt="Car Parking"
              />
            </div>
            <Carousel.Caption>
              <section className="slider_section">

                <div className="detail-box col-md-9 mx-auto px-0">
                  <h1 className='fw-bolder'>
                    Finding Events So Easy
                  </h1>
                  {/* <p>
                    Necessitatibus non ducimus hic dolor? Maiores itaque vitae sit blanditiis porro, a expedita ex. Totam vel sed obcaecati. Placeat maxime asperiores deleniti tenetur officiis laboriosam laborum a nihil quisquam quis!
                  </p> */}
                  
                </div>
              </section>
              {/* <h3 className='text-info'>CAR PARKING SYSTEM</h3>
          <p>One stop solution for paring search and parking booking</p> */}

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>

            <div className="img2">
              <img
                className="d-block w-100 h-100"
                src={Image1}
                alt="Canteen"
              />
            </div>


            <Carousel.Caption>

              {/* <h3 className='text-info'>CANTEEN MANGEMENT SYSTEM</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              <section className="slider_section">

                <div className="detail-box col-md-9 mx-auto px-0 text-center">
                  <h1 className='fw-bolder'>
                    Find The Events You Like Easily
                  </h1>
                  {/* <p>
                    Necessitatibus non ducimus hic dolor? Maiores itaque vitae sit blanditiis porro, a expedita ex. Totam vel sed obcaecati. Placeat maxime asperiores deleniti tenetur officiis laboriosam laborum a nihil quisquam quis!
                  </p> */}
                 
                </div>



              </section>

            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>
      </div>
      {/* <!-- why section --> */}

      <div section className="why_section layout_padding mt-5" >
        <div className="container py-5">
          <div className="row">
            <div className="col text-center">
              <h2 className='fw-bold'>Event Management System</h2>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur provident at nesciunt amet vero sapiente quidem, magni autem harum quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    No Booking Fees
                  </h4>
                  <p className=''>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image1} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Online Payments
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image2} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Simple Booking Process
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 py-5 text-center">
              <Link to='/pricing' variant="contained" className='btn text-white w-50 p-3 border-0' style={{ background: '#ff6f3c' }}>Discover More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end why section --> */}

      { /* image Section */}
            <div className="container my-5">
                <div className="row text-center" >
                    <div className='text-center mb-5 '>
                        <h1>Our Recent Events</h1>
                        <p>Our Popular products Contain Sandwiches , Fritters , Rolls</p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className="card  mb-2 mb-md-0" style={{width: '350px' }}>
                            <img className='card-img-top' src={Image1} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="card-footer">
                                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Webinar On web</h4>
                                
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-md-4'>

                        <div className="card  mb-2 mb-md-0   " style={{width: '350px' }}>
                            <img className='card-img-top' src={Image2} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </div>
                            <div className="card-footer">
                                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Webinar On apps</h4>
                                
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-md-4'>

                        <div className="card  mb-2 mb-md-0  " style={{width: '350px' }}>
                            <img className='card-img-top' src={Image3} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="card-footer">
                                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Webinar On tech</h4>
                                
                            </div>

                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <button variant="contained" className='btn text-white w-50 p-3 border-0' style={{ background: '#ff6f3c' }}>Discover More</button>
                    </div>
                </div>
            </div>

       <div className='container'>
            <div className="row">
                <div className="col">
                    <h1 className='text-center'>About Our Events</h1>

                </div>
            </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <p className=' fs-4'>Event planning is a complex and ever-changing field, and Event App designers must constantly innovate to keep up with the latest trends. One current trend is the move towards "hybrid events" that combine in-person and online elements. Event planners are also increasingly looking for Event Apps with China capability, as more and more events are being held in China. With so many different factors to consider, how can event planners choose the best Event App for their needs?</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={Image3} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

    </>

  )
}
