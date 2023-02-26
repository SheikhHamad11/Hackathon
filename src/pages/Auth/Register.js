// 
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth, firestore } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore/lite';
import { AuthContext } from '../Context/AuthContext';

const initialState = {
    email: "",
    password: "",
}

export default function Register() {

    const { dispatch } = useContext(AuthContext)

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleRegister = e => {
        e.preventDefault()
        let { email, password } = state

        setIsProcessing(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                addDocument(user)
                console.log("user created")
            })
            .catch((err) => {
                console.error(err)
                setIsProcessing(false)
            })
        setState(initialState)
    }

    const addDocument = async (user) => {
        try {
            await setDoc(doc(firestore, "users", user.uid), {
                uid: user.uid,
            });
            console.log("user documents created at firestore")
            dispatch({ type: "LOGIN" })
        }
        catch (err) {
            console.error(err)
        }
        setIsProcessing(false)

    }

    return (
        <>
            <div className="register auth">
                <div className="overlay">
                    <div className="container m-auto">
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">


                                <div className="card w-100  reg-card p-2 p-md-3 p-lg-4  shadow-lg mt-5 py-5">
                                    <h2 className="text-black text-center ">Register Form</h2>
                                    <p className='text-secondary text-center'>Create account to get full access</p>


                                    <form onSubmit={handleRegister}>



                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor=""><b> Email</b></label>
                                                <input type="text" name='email' placeholder='Enter your Email' className='form-control border-radius-0' onChange={handleChange} />

                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor=""><b>Password</b> </label>
                                                <input type="password" name='password' placeholder='Enter Your Password' className='form-control border-radius-0' onChange={handleChange} />

                                            </div>
                                        </div>




                                        <div className="row mb-3">
                                            <div className="col-6 d-flex ">
                                                <p>Already have account</p>
                                                <Link className='login-link' to='/auth/login'>Login Here</Link>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <button className=' p-4 btn-register w-auto border-0'>
                                                    {!isProcessing
                                                    
                                                    ? "Register"
                                                    : <div className='spinner-grow spinner-grow-sm'></div>
                                                    }

                                                    </button>
                                            </div>
                                            <div className="row">
                                       
                                    </div>
                                        </div>




                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



           
        </>
    )
}

