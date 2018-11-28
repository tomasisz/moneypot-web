import React from 'react'
import { Link } from 'gatsby'

import {
    CardDeck,
    Card, CardImg, CardText,
    CardBody, Button
} from "reactstrap";
import fastImg from '../images/fast.svg'
import cheapImg from '../images/cheap.svg'
import privateImg from '../images/private.svg'

const IndexAdvantages = () => (
    <CardDeck>
        <Card>
            <CardImg top src={fastImg} alt="fast" style={{ width: '50%', margin: 'auto'}}/>
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>It's fast, almost instant!</h3>
                <CardText>Some text</CardText>
                <Link to="/">Learn More</Link>
            </CardBody>
        </Card>
        <Card>
            <CardImg top src={privateImg} alt="privacy" style={{ width: '50%', margin: 'auto'}} />
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>Protects your privacy</h3>
                <CardText>Some text</CardText>
                <Link to="/privacy">Learn More</Link>
            </CardBody>
        </Card>
        <Card>
            <CardImg top src={cheapImg} alt="cost" style={{ width: '50%', margin: 'auto'}}/>
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>Very low fees!</h3>
                <CardText>Some text</CardText>
                <Button>Learn More</Button>
            </CardBody>
        </Card>
    </CardDeck>
)

export default IndexAdvantages
