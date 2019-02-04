import React from 'react'
import { Link } from 'gatsby'

import {
    CardDeck,
    Card, CardImg, CardText,
    CardBody
} from "reactstrap";
import tile from '../images/tile-2.png'
import fastImg from '../images/fast.svg'
import privateImg from "../images/private.svg";
import cheapImg from '../images/cheap.svg'


const IndexAdvantages = () => (
    <div  style={{
        backgroundImage: `url(${tile})`,
        margin: '0 -1rem',
        padding: '2rem 4rem'
    }}>
        <h2 style={{ color: '#fff'}}>hookedin is awesome</h2>
        <CardDeck style={{ color: '#fff'}}>
            <Card>
                <CardImg top src={fastImg} alt="fast" style={{ width: '50%', margin: 'auto'}}/>
                <CardBody>
                    <h3 style={{ marginBottom: '1rem'}}>It's fast, almost instant!</h3>
                    <CardText>
                        Trading within hookedin with other users is very fast. You don't need to wait for confirmations.
                    </CardText>
                    <Link to="/">Learn More</Link>
                </CardBody>
            </Card>
            <Card>
                <CardImg top src={privateImg} alt="privacy" style={{ width: '50%', margin: 'auto'}} />
                <CardBody>
                    <h3 style={{ marginBottom: '1rem'}}>The most private service</h3>
                    <CardText>
                       There will be no way to track your transactions, hookedin offers you the most private service in the market.
                    </CardText>
                    <Link to="/privacy">Learn More</Link>
                </CardBody>
            </Card>
            <Card>
                <CardImg top src={cheapImg} alt="cost" style={{ width: '50%', margin: 'auto'}}/>
                <CardBody>
                    <h3 style={{ marginBottom: '1rem'}}>Save on fees!</h3>
                    <CardText>
                        hookedin uses a state-of-the-art algorithm for coin selection to ensure the fees paid in bitcoin transactions are the lowest possible.
                    </CardText>
                    <Link to="/fees">See fees</Link>
                </CardBody>
            </Card>
        </CardDeck>
    </div>
)

export default IndexAdvantages
