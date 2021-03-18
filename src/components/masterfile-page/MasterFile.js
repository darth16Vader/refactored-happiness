import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Product from './Product'
import Material from './Material'
import UserAccount from './UserAccount'
import '../../css/App.css'

const MasterFile = () => {
    return (
        <Router>
            <Header />
            <Route path='/user' component={UserAccount} exact />
            <Route path='/product' component={Product} exact />
            <Route path='/material' component={Material} exact />
        </Router>
    )
}

export default MasterFile
