import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../pages/Home'
export const Route = () =>{
    return(
        <Router basename={process.env.PUBLIC_URL} >
            <Home />
        </Router>
    )
}