// 
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore/lite';
import { async } from '@firebase/util';
import { firestore } from '../../config/firebase';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase'
const initialState = {
    title: "",
    date: "",
    time: '',
    location: "",
    description: "",
    file: '',
}

export default function Hero() {
    const { users } = useContext(AuthContext)
    const user=users.user
    const [state, setState] = useState(initialState)
    // const [file, setFile] = useState({})
    const [isProcessing, setIsProcessing] = useState()
    const [isUploading, setIsUploading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [downloadURL, setDownloadURL] = useState('')
    // const handleChange = e => {
    //     // let { name, value } = e.target
    //     // value = value.trim()
    //     setState(s => ({ ...s, [e.target.name]: e.target.value }))
    // }

    const handleChange = (e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    })
    const handleFile=(e)=>{

        let file=e.target.files[0];
        const fileExt = file.name.split('.').pop();
        console.log(fileExt)

        const randomId = Math.random().toString(36).slice(2)
        console.log(randomId)

        const imagesRef = ref(storage, `images/${randomId}.${fileExt}`)
        const uploadTask = uploadBytesResumable(imagesRef, file);
        setIsUploading(true)

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + progress + '% done');
                setProgress(progress)
            }
            , (error) => {
                console.error(error)
                setIsUploading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        console.log('file available at' + downloadURL);
                        setDownloadURL(downloadURL)
                        setTimeout(() => {
                            setIsUploading(false)
                        }, 1000);

                    })

            }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user)
        console.log(state)
        let { title, date, time, location, description } = state
        title = title.trim();

        location = location.trim();
        description = description.trim();

        if (title.length < 3) {
            return toast("Please enter your title correctly", "error")
        }
        if (!date) {
            return toast('plaese select date')
        }
        if (!time) {
            return toast('plaese select time')
        }
        if (!location) {
            return toast("Please select your location", "error")
        }
        if (description.length < 10) {
            return toast("Please enter your description correctly", "error")
        }
        // if (!file) {
        //     return toast("Please select an Image", "error")
        // }

        // if(file.name){
        //     uploadFile(addEvent)
            
        // }

       




        let addEvent = { ...state }
        addEvent.id = Math.random().toString(36).slice(2)
        addEvent.dateCreated = new Date();
        addEvent.status = "active";
        addEvent.displayName = 'hamad'
        addEvent.dateCreated = serverTimestamp()
      

        addEvent.img=downloadURL;
        addEvent.createBy = {
            email: user.email,
            uid: user.uid,
        }

        createDocument(addEvent)
    }

    const createDocument = async (addEvent) => {
        console.log(async)
        setIsProcessing(true)
        console.log(addEvent)
        try {
            await setDoc(doc(firestore, 'events', addEvent.id), addEvent);
            toast('event has been posted');

        }
        catch (e) {
            console.error(e)
            toast('event has not been posted')
        }
        setIsProcessing(false)
    }




    // const create = (todo) => {
    //     console.log(todo)

    //     let todos = JSON.parse(localStorage.getItem("todos")) || []

    //     todos.push(todo)

    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }


    return (
        <div className='dashboard create py-5 min-vh-100 '>
            <div className="overlay">
                <div className="container  ">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1">
                            <div className="card shadow-lg border-0 p-3 p-md-4 p-lg-5">
                                <div className="row mb-5">
                                    <div className="col">
                                        <h1 className="text-center mb-3 text-black ">Add Event</h1>
                                        <div className="divider"></div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12  mb-3">
                                            <input type="text" name="title" placeholder='Title' className='form-control bg-transparent border-secondary' onChange={handleChange} />
                                        </div>

                                        <div className="col-12 col-md-6 mb-3">
                                            <input type='date' name="date" placeholder='Date' className='form-control bg-transparent border-secondary' onChange={handleChange} />
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <input type='time' name="time" placeholder='Time' className='form-control bg-transparent border-secondary' onChange={handleChange} />
                                        </div>
                                        <div className="col-12  mb-3">

                                            <input type="text" name="location" placeholder='Location' className='form-control bg-transparent border-secondary' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <textarea name="description" placeholder='Description' className='form-control bg-transparent border-secondary' onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <input type="file" className='form-control border-secondary' accept='image/*' alt='image' onChange={handleFile} />
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col my-2">
                                            {isUploading ? <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar" style={{ width: `${progress}%` }}>{progress}%</div>
                                            </div> : ""}

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-center">
                                            <button className='btn btn-primary text-white w-100' disabled={isProcessing}>
                                                {
                                                    !isProcessing ? 'Add Event' : <div className='spinner-border spinner-border-sm'></div>
                                                }
                                            </button>



                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">

                                            <Link to='/' className='btn btn-warning mt-2 w-100'>Go Home</Link>

                                        </div>
                                        <div className="col">
                                            <Link to='/events' className='btn btn-warning mt-2 w-100'>See Events</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

