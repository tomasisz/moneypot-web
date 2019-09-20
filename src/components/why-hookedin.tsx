import React from 'react'

import './why-hookedin.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function WhyHookedin() {
    return (    
    <div>
        <h2>Coming soon..</h2>
        <p>
            The moneypot.com domain was aquired from monsterbyte.io and will be used for an exciting new crypto wallet. Currently in limit private testing, so please come back in a week or two!
        </p>
        <h2>Why moneypot?</h2>
                <p style={{fontWeight: 'bold'}}>See for yourself:</p>
                <div className="comparison-table">
                    <div>
                        <div></div>
                        <div>hookedin</div>
                        <div>Any Wallet</div>

                    </div>
                    <div>
                        <div>Private</div>
                        <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/></div>
                        <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
                    </div>
                    <div>
                        <div>Send fee [fast]</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Send fee [eco]</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Receive fee</div>
                        <div>....sat (-%)</div>
                        <div>....sat </div>
                    </div>
                    <div>
                        <div>Instant tx</div>
                        <div><FontAwesomeIcon icon="check" style={{ color: 'green'}}/> hookedin direct</div>
                        <div><FontAwesomeIcon icon="times" style={{ color: 'red'}}/></div>
                    </div>
                </div>
    </div>
    )
}


