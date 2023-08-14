import React from 'react'
import Header from '../Controllers/Header'
import AuditManagerDetails from '../Controllers/AuditManagerDetails'
import Footer from '../Controllers/Footer'


const AuditManager = () => {
    return (
        <div>
            <Header/>
            <AuditManagerDetails/>
            <Footer/>
        </div>
    )
}

export default AuditManager