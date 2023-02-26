import React from 'react'
import Image3 from '../../Assets/home5.png'
export default function About() {
  return (
    <>
        <div className='containe'>
            <div className="row">
                <div className="col">
                    <h1 className='text-center  bg-light py-3'>About Our Events</h1>

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
