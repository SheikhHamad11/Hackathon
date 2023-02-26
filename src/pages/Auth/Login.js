// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../config/firebase'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const initialState = {
//     email: "",
//     password: "",
// }

// export default function Login() {

//     const navigate = useNavigate()
//     const [state, setState] = useState(initialState)
//     const [isProcessing, setIsProcessing] = useState(false)

//     const handleChange = e => {
//         setState(s => ({ ...s, [e.target.name]: e.target.value }))
//     }

//     const handleLogin = e => {
//         e.preventDefault()
//         let { email, password } = state

//         setIsProcessing(true)
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             let user = userCredential.user
//             navigate("/dashboard")
//             console.log(user)
//         })
//         .catch((err) => {
//             console.error(err)
//         })
//         .finally(() => {
//             setIsProcessing(false)
//         })
//     }

//     return (
//         <div className="auth">
//             <div className="container">
//                 <div className="row d-flex justify-content-center align-items-center">
//                     <div className="col-12 col-md-8 col-lg-6">
//                         <div className="card p-2 p-md-3 p-lg-4">
//                             <div className="row">
//                                 <div className="col">
//                                     <h1 className='text-center text-white'>LOGIN</h1>
//                                 </div>
//                             </div>
//                             <form onSubmit={handleLogin}>
//                                 <div className="row mb-4">
//                                     <div className="col">
//                                         <label className='text-light fs-5' htmlFor="email">Email</label>
//                                         <input type="email" className='w-100 emailStyle d-block' placeholder='Enter Your Email' name='email' onChange={handleChange} />
//                                     </div>
//                                 </div>
//                                 <div className="row mb-4">
//                                     <div className="col">
//                                         <label className='text-light fs-5' htmlFor="password">Password</label>
//                                         <input type="password" className='w-100 emailStyle' placeholder='Password' name='password' onChange={handleChange} />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col">
//                                         <button className='btn btn-danger text-light w-100 my-4' disabled={isProcessing}>
//                                             {
//                                                 !isProcessing
//                                                     ? "Login"
//                                                     : <div className='spinner-grow spinner-grow-sm'></div>
//                                             }
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                                 <div className="row">
//                                     <div className="col">
//                                         <p className='text-center text-white'>Need an account? <Link to="/auth/register" className='text-info mx-2'>Register</Link></p>
//                                     </div>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
    email: "",
    password: "",
}

export default function Login() {

    const navigate = useNavigate()
    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleLogin = e => {
        e.preventDefault()
        let { email, password } = state

        setIsProcessing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user
                navigate("/")
                console.log(user)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setIsProcessing(false)
            })
    }

    return (
        <>
          <div className="login auth">
                <div className="overlay ">
                    <div className="container">
                        <form onSubmit={handleLogin}>
                            <div className="row">
                                <div className="col-12  col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                    <div className="card w-100 login-card shadow  p-2 p-md-3 p-lg-4 py-5" style={{ marginTop: '5rem' }}>
                                        <h2 className="text-black text-center ">Login</h2>
                                        <p className='text-secondary text-center'>Enter login details to acess</p>

                                        <div>

                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor=""><b> Username or Email</b></label>
                                                    <input type="email" name='email' placeholder='Enter your email' className='form-control' onChange={handleChange} />
                                                </div>
                                            </div>


                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label htmlFor=""><b> Password</b></label>
                                                    <input type="password" name='password' placeholder='Enter Your Password' className='form-control' onChange={handleChange} />

                                                </div>
                                            </div>

                                            <div className="row mb-3 d-flex justify-content-between">
                                                <div className="col-6 ">
                                                    <input type='checkbox' className='me-1 pt-2' />
                                                    <label htmlFor=""> Keep me logged in</label>
                                                </div>

                                                <div className="col-6 d-flex justify-content-end">
                                                    <Link className='login-link ' to='/auth/forgotpassword' >Forget Password</Link>
                                                </div>
                                            </div>




                                            <div className="row mb-3 d-flex justify-content-end mt-5">

                                                <div className="col-6 d-flex ">
                                                    <p>Don't have account </p>
                                                    <Link className=' login-link' to="/auth/register"><>Register</> </Link>
                                                    <p> here</p>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <button disabled={isProcessing} className='p-4 w-auto text-center  btn-login border-0 '>{!isProcessing ? "Login" : <div className='spinner-border spinner-border-sm'></div>}</button>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          

          

        </>
    )
}
