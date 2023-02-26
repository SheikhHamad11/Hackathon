import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from './Home'
import About from './About'
import Events from './Events'
import Button from './Button'
import NoPage from '../NoPage/NoPage'
export default function Index() {
    return (
        <>
            {/* <Routes> */}
                <Header />
                <main>
                    <Routes path='/'>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="events" element={<Events />} />
                        <Route path="button" element={<Button />} />
                        <Route path='*' element={ <NoPage/> } />
                    </Routes>
                </main>
                <Footer />
            {/* </Routes> */}
        </>
    )
}
