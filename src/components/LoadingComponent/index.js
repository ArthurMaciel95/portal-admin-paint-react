import React from 'react'
import './styles.css'

const LoadingComponent = () => {
    return (
        <div className="loading-overlay">
            <div id="container">
                <div id="ball-1" className="circle"></div>
                <div id="ball-2" className="circle"></div>
                <div id="ball-3" className="circle"></div>

            </div>
        </div>
    )
}

export default LoadingComponent
