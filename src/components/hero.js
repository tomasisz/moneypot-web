import React from 'react'

const Hero = () => (
    <div
        style={{
            background: 'linear-gradient(rgb(15, 98, 189) 24%, rgb(10, 64, 122) 168%)',
            backgroundImage: 'linear-gradient(rgb(15, 98, 189) 24%, rgb(10, 64, 122) 168%)',
            borderBottomLeftRadius: '50% 8%',
            borderBottomRightRadius: '50% 8%',
            minHeight: '90vh',
            width: '120%',
            margin: '-10% -10% 0% -10%',
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

