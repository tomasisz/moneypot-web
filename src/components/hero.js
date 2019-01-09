import React from 'react'

const Hero = () => (
    <div
        style={{
            background: 'linear-gradient(rgb(15, 98, 189) 24%, rgb(10, 64, 122) 168%)',
            backgroundImage: 'linear-gradient(rgb(15, 98, 189) 24%, rgb(10, 64, 122) 168%)',
            minHeight: '90vh',
            margin: '-5rem -1rem 0',
        }}
    >
        <div
            style={{
                color: '#fff',
                margin: '0% 15%',
                padding: '20% 2rem',
                textAlign: 'center',
                fontSize: '3rem'
            }}
        >
            <p>The sidechain that makes bitcoin payments practical</p>
        </div>
    </div>
)

export default Hero

