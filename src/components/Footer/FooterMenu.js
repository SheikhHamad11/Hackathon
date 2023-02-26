import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterMenu() {
    return (
        <>
       
  <section class="info_section ">

    <div class="container">
      <div class="info_top ">
        <div class="row ">
          <div class="col-md-6 col-lg-3 info_col">
            <div class="info_form">
              <h4>
                Stay Connected
              </h4>
              <form action="">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
              <div class="social_box">
                <Link>
                <i class="bi bi-facebook"></i>
                </Link>
                <Link>
                <i class="bi bi-youtube"></i>
                </Link>
                <Link >
                <i class="bi bi-github"></i>
                </Link>
                <Link>
                <i class="bi bi-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col ">
            <div class="info_detail">
              <h4>
                About Us
              </h4>
              <p>
                Necessitatibus, culpa, totam quod neque cum officiis odio, excepturi magnam incidunt voluptates sed voluptate id expedita sint! Cum veritatis iusto molestiae reiciendis deserunt vel odio incidunt, tenetur itaque. Ullam, iste!
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col ">
            <div class="info_detail">
              <h4>
                Online Booking
              </h4>
              <p>
                Accusantium quis architecto, necessitatibus libero nemo facere perferendis obcaecati pariatur magni quod praesentium provident nisi impedit nobis omnis. Assumenda vero impedit dolorum perspiciatis, ipsa quasi corrupti numquam.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 info_col">
            <h4>
              Contact us
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <div class="contact_nav">
              <Link >
              <i class="bi bi-geo-alt-fill"></i>
                <span>
                  Location
                </span>
              </Link>
              <Link >
              <i class="bi bi-telephone"></i>
                <span>
                  Call : +01 123455678990
                </span>
              </Link>
              <Link >
              <i class="bi bi-envelope-open-fill"></i>
                <span>
                  Email : demo@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
        </>
    )
}

