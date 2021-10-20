import React from 'react'
import './styles.css'
const LoadingCircleComponent = () => {
    return (
        <div className="loading-overlay">
            <div id="container">
                <span class="spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </div>

    )
}

export default LoadingCircleComponent
