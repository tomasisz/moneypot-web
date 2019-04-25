import React from 'react'

import './why-hookedin.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function WhyHookedin() {
    return (
    <div>

                <p style={{fontWeight: 'bold'}}>See for yourself:</p>
                <div className="comparison-table">
                    <div>
                        <div></div>
                        <div>Send [fast]</div>
                        <div>Send [economic]</div>
                        <div>Receive</div>
                        <div>Instant</div>
                    </div>
                    <div>
                        <div>Any Wallet</div>
                        <div><FontAwesomeIcon icon="check"/></div>
                        <div>....</div>
                        <div>0.1 sat</div>
                        <div>Not available</div>
                    </div>
                    <div>
                        <div>hookedin</div>
                        <div>....</div>
                        <div>....</div>
                        <div>0.01 sat</div>
                        <div>0.001 sat</div>
                    </div>
                </div>

    </div>
    )
}


