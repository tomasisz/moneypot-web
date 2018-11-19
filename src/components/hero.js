import React from 'react'

const Hero = ({ children }) => (
    <div
        style={{
            background: 'linear-gradient(to bottom, #487eb7, #3c689e, #315286, #253d6d, #192a56)',
            color: '#fff',
            minHeight: '90vh',
            margin: '0px -1rem',
            padding: '2rem'
        }}
    >
        {children}
    </div>
)

export default Hero

