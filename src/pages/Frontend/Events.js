
import React, { useState, useEffect } from 'react'
// import { AuthContext } from '../Context/AuthContext';
import { collection, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore/lite';
import { firestore } from '../../config/firebase';
import { toast } from 'react-toastify';
// const initialState = {
//   title: "",
//   location: "",
//   description: "",
// }

export default function Hero() {
  // const { user } = useContext(AuthContext)
  const [documents, setDocuments] = useState([])
  const [event, setEvent] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isProcessingDelete, setIsProcessingDelete] = useState(false)

  const fetchDocuments = async () => {
    let array = []
    const querySnapshot = await getDocs(collection(firestore, "events"));
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      array.push(data)
    });


    setDocuments(array)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  const handleDelete = (async (event) => {
    // console.log(event)

    setIsProcessingDelete(true)
    try {
      await deleteDoc(doc(firestore, "events", event.id));
      let newDocuments = documents.filter((doc) => {
        return doc.id !== event.id

      })
      toast('Successfully deleted')
      setDocuments(newDocuments)
    }
    catch (err) {
      console.error(err)
      toast('something went wrong')
    }
    setIsProcessingDelete(false)
  })

  const handleUpdate = async () => {
    console.log(event)
    let addEvent = { ...event }
    // addEvent.dateCreated = addEvent.dateCreated;
    addEvent.dateModified = serverTimestamp()

    // addEvent.modifiedBy={
    //   email:user.email,
    //   uid:user.uid,
    // }
    setIsProcessing(true)
    try {
      await setDoc(doc(firestore, 'events', addEvent.id), addEvent, { murge: true });
      // toast('event has been updated');
      let newDocuments = documents.map((doc) => {
        if (doc.id === event.id)
          return event
        return doc

      })
      toast('event has been updated', 'success')
      setDocuments(newDocuments)
    }
    catch (e) {
      console.error(e)
      toast('event has not been updated')
    }
    setIsProcessing(false)
  }


  const handleChange = e => {
    setEvent(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  return (
    <>
      <h1 className="text-center bg-info py-1">This is Our events Section</h1>
      <div className='create py-5 min-vh-100 bg-light'>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <h1 className="text-center mb-3 "> All Recent Events</h1>
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">


            {!isLoading ?

              documents.map((event, i) => {
                return (

                  <div className='col-12 col-md-4' key={i}>

                    <div className="card  mb-3" style={{ width: '350px' }}>
                      <img className='card-img-top' src={event.img} style={{ height: '250px' }} alt="" />
                      <div className="card-body">
                        <h5>Title:{event.title}</h5>
                        <p>Date:{event.date}</p>
                        <p>Time:{event.time}</p>
                        <p>Location:{event.location}</p>
                        <p>Description:{event.description}</p>


                      </div>
                      <div className="card-footer">
                        {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                        <button onClick={() => { setEvent(event) }} className='btn btn-warning btn-sm me-1 mb-sm-1 mb-md-0' data-bs-toggle="modal" data-bs-target="#editModal" disabled={isProcessing} >{!isProcessing ? 'Edit' : <div className='spinner-border spinner-border-sm'></div>}</button>
                         <button disabled={isProcessingDelete} className='btn btn-danger btn-sm me-1' onClick={() => { handleDelete(event) }}>{
                          !isProcessingDelete ? "Delete" : <div className='spinner-border spinner-border-sm'></div>
                        }</button>
                       
                        <button className='btn btn-success text-white btn-sm'>Join Event</button>

                      </div>

                    </div>

                  </div>



                )
              })



              : <div className='text-center'><div className='spinner-grow'></div> </div>
            }


          </div>
        </div>
      </div>




      <div className="modal fade" id='editModal'>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Update event</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input type="text" name="title" placeholder='Title' className='form-control' value={event.title} onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6 mb-3">

                  <input type="text" name="location" placeholder='Location' className='form-control' value={event.location} onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6 mb-3">

                  <input type='date' name="date" placeholder='Date' className='form-control' value={event.date} onChange={handleChange} />
                </div>
                <div className="col-12 col-md-6 mb-3">

                  <input type='time' name="time" placeholder='Date' className='form-control' value={event.time} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <textarea name="description" placeholder='Description' className='form-control' value={event.description} onChange={handleChange}></textarea>
                </div>
              </div>



            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdate}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

